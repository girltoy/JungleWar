
import "dotenv/config";
import { ModzyClient } from "../src/index";

const apiKey = process.env.API_KEY;
const modzyClient = new ModzyClient({ apiKey });

const EXAMPLE_MODEL_ID = "ed542963de"; // Sentiment Analysis
const EXAMPLE_MODEL_NAME = "Sentiment Analysis"; // Sentiment Analysis
const EXAMPLE_MODEL_VERSION = "1.0.1"; // Sentiment Analysis
const EXAMPLE_MODEL_INPUT_NAME = "input.txt"; // Sentiment Analysis

describe("Setup", () => {
  test("api key from .env file exists", () => {
    expect(apiKey).toBeDefined();
  });

  test("modzyClient is initialized", () => {
    expect(modzyClient).toBeDefined();
  });
});

describe("Model methods", () => {
  test("getModels, no params", async () => {
    const models = await modzyClient.getModels();
    expect(models).toBeDefined();
    expect(models).not.toHaveLength(0);
    models.forEach((model) => {
      expect(model.modelId).toBeDefined();
      expect(model.latestVersion).toBeDefined();
      expect(model.versions).toBeDefined();
    });
  });

  test("getModels, with param", async () => {
    const models = await modzyClient.getModels({ modelId: EXAMPLE_MODEL_ID });

    expect(models).toBeDefined();
    expect(models).toHaveLength(1);
    models.forEach((model) => {
      expect(model.modelId).toBeDefined();
      expect(model.latestVersion).toBeDefined();
      expect(model.versions).toBeDefined();
    });
  });

  test("getActiveModels", async () => {
    const models = await modzyClient.getActiveModels();
    expect(models).toBeDefined();
    expect(models).not.toHaveLength(0);

    // This list could be long, so we're just testing the first item
    const model = models[0];
    expect(model.identifier).toBeDefined();
    expect(model.name).toBeDefined();
    expect(model.author).toBeDefined();