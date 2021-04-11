
# JavaScript SDK

Modzy's JavaScript SDK provides a convenient wrapper around many of Modzy's most popular API routes. SDK functions include querying models, submitting inference jobs, and returning job results.

## About this documentation

This documentation expects that you have at least a basic knowledge of JavaScript and npm packages. If you are unfamiliar with installing and using npm packages, you can start learning here: https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/

## Environments where you can use this SDK

This SDK supports both Node.js and JavaScript in the browser by providing different variations of methods based on the output target of your build system. The SDK gives Node.js methods by default if not using a build system. If you are attemption to use the SDK for a browser application and see errors relating to not being able to find `fs` or `path`, make sure you are using a build system such as webpack and the target is set to `web`.

## Installation

From the command line inside your project directory, use npm or yarn to install the SDK:

```bash
yarn add @modzy/modzy-sdk
# or
npm install @modzy/modzy-sdk
```

Then import the ModzyClient class into your code:

```javascript
import { ModzyClient } from "@modzy/modzy-sdk"; // ES modules
// or
const { ModzyClient } = require("@modzy/modzy-sdk"); // CommonJS
```

## Initialize the client

To initialize `ModzyClient`, you need an [api key](https://docs.modzy.com/docs/getting-started#key-download-your-api-key). If using an installation of Modzy other than app.modzy.com, you'll also need to provide the url for your instance of Modzy. For debugging purposes, you can also turn on logging.

⚠️ _Warning: Keep your API key secret. Do not include it in a git repo or store it on GitHub_

```javascript
// app.modzy.com
const modzyClient = new ModzyClient({
  apiKey: "xxxxxxxxxxxxx.xxxxxxxxxxxxx",
});

// or for private Modzy instances with logging on
const modzyClient = new ModzyClient({
  apiKey: "xxxxxxxxxxxxx.xxxxxxxxxxxxx",
  url: "https://modzy.yourdomain.com",
  logging: "on", // "off" | "on" | "verbose"
});
```

## Submit a job

The ModzyClient has several methods for creating jobs based on the input type:

- `submitJobText()`: For text inputs
- `submitJobFile()`: For binaries
- `submitJobEmbedded()`: For Base64 strings
- `submitJobAwsS3()`: For inputs stored in S3
- `submitJobJDBC()`: For inputs stored in databases

The return of each of these methods is a promise that resolves to an object describing the submitted job, _not the job result!_
The most important item in the job object is the `jobIdentifier` - you'll use this to check the status of the job and get the job results.

```javascript
const { jobIdentifier } = await modzyClient.submitJobText({
  modelId: "ed542963de",
  version: "1.0.1",
  sources: {
    yourInputKey: {
      "input.txt": "Sometimes I really hate ribs",
    },
  },
});
```

In the sources object above, the key `"yourInputKey"` is named by you and can be anything, but "input.txt" is the required input name set by this particular model. You can find the input name(s) by going to model details > API for the model you want to use ([example](https://app.modzy.com/models/ed542963de/1.0.1?tab=api)).

Your can submit multiple input sets in a single job rather than submitting multiple jobs with a single input set. An example using the same model as above:

```javascript
const { jobIdentifier } = await modzyClient.submitJobText({
  modelId: "ed542963de",
  version: "1.0.1",
  sources: {
    myFirstInput: {
      "input.txt": "Rain is the worst weather",
    },
    mySecondInput: {
      "input.txt": "Partly cloudy is the best weather",
    },
  },
});
```

Some models require two or more inputs to run. In that case, the sources object would look something like this:

```javascript
souces: {
  yourInputKey: {
    "inputA": // ...contents of inputA,
    "inputB": // ...contents of inputB,
  },
};
```

[Learn more about creating jobs.](https://docs.modzy.com/reference/create-a-job-1)

---

## Wait for the job to complete

Before you can get your job's result, you first have to wait for the job to finish. How long will that take? Well ... it's complicated. A job might finish in a few milliseconds, or it may take several minutes to finish running. How long depends on a numbers of factors such as model type, job queue length, how many processing engines are running, and the hardware being used.