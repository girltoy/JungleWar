// Note that this code sample is for Node JS and will not run in the browser

const { ModzyClient } = require("@modzy/modzy-sdk");

// The MODZY_API_KEY is your own personal API key. It is composed by a public part,
// a dot character, and a private part
// (ie: AzQBJ3h4B1z60xNmhAJF.uQyQh8putLIRDi1nOldh).
const API_KEY = process.env.MODZY_API_KEY;

// Client initialization:
// Initialize the ApiClient instance with the API_KEY. We're using app.modzy.com, so a
// `url` is not specified
const modzyClient = new ModzyClient({
  apiKey: API_KEY,
  logging: "on",
});

// Create a Job with an embedded input, wait, and retrieve results:
async function createJobWithEmbeddedInput() {
  try {
    // Get the model object:
    // If you already know the model identifier (i.e.: you got it from the URL of the model details page or the input sample),

    // you can skip this step. If you don't, you can find the model identifier by using its name as follows:
    const { modelId, latestActiveVersion } = await modzyClient.getModelByName(
      "Multi-Language OCR"
    );
    // Or if you already know the model id and want to know more about the model, you can use this instead:
    // let model = await modzyClient.getModelById("c60c8dbd79");
    // You can find more information about how to query the models on the model_samples.js file.
    // Or just log the model identifier and the latest version
    console.log(
      `The model identifier is ${modelId} and the latest active version is ${latestActiveVersion}`
    );

    // Get the model details object:
    // If you already know the model id, version, and the input key(s), you can skip
    // this step. Also, you can use the following code block to know about the input keys
    // and skip the call on future job submissions.
    const modelDetails = await modzyClient.getModelDetails({
      modelId,
      version: latestActiveVersion,
    });

    // The info stored in model details provides insights about the amount of time that
    // the model can spend processing, the input, and output keys of the model.
    console.log(`This model version is ${modelDetails.version}`);
    console.log(
      `  timeouts: status ${modelDetails.timeout.status}ms, run ${modelDetails.timeout.run}ms `
    );
    console.log("  inputs: ");
    for (const key in modelDetails.inputs) {
      let input = modelDetails.inputs[key];
      console.log(
