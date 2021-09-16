
import { ModzyClient } from "@modzy/modzy-sdk";

// The MODZY_API_KEY is your own personal API key. It is composed by a public part,
// a dot character, and a private part
// (ie: AzQBJ3h4B1z60xNmhAJF.uQyQh8putLIRDi1nOldh).
const API_KEY = process.env.MODZY_API_KEY;

// Client initialization:
// Initialize the ApiClient instance with the BASE_URL and the API_KEY to store those
// arguments for the following API calls.
const modzyClient = new ModzyClient({ apiKey: API_KEY, logging: "verbose" });

// Create a Job with an AWS input, wait, and retrieve results:
async function createJobWithAWSInput() {
  try {
    // Get the model object:
    // If you already know the model identifier (i.e.: you got it from the URL of the
    // model details page or the input sample), you can skip this step. If you don't,
    // you can find the model identifier by using its name as follows:
    const { modelId, latestActiveVersion } = await modzyClient.getModelByName(
      "Facial Embedding"
    );

    // Or if you already know the model id and want to know more about the model,
    // you can use this instead:
    // let model = await modzyClient.getModelById("f7e252e26a");

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