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

async function modelsSample() {
  // Get all active models
  const activeModels = await modzyClient.getActiveModels();
  console.log("All active models", activeModels);

  // Get models that meet some criterial
  const openSourceModels = await modzyClient.getModels({
    author: "Open Source",
    isActive: true,
  });
  console.log("Open source models", openSourceModels);

  // Get model by name. The name doesn't have to be exact; it uses the closest match
  const audioFingerprintingModel = modzyClient.getModelByName(
    "Audio Fingerprinting"
  );
  console.log("Audio Fingerprinting Model", audioFingerprintingModel);

  // Get model info by it's modelId (this is the text to speech model on app.modzy.com)
  // This will be information that pertains to all version of this model
  const textToSpeechModels = await modzyClient