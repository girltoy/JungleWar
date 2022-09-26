
import { ModelClient } from "./ModelClient";
import { JobClient } from "./JobClient";
import { FileJobClient } from "./FileJobClient";
import { toBase64 } from "./base64Util";
import { DEFAULT_URL } from "./constants";

import type {
  ClassInitiator,
  GetModelsParams,
  GetModelDetailsParams,
  GetJobHistoryParams,
  SubmitJobTextParams,
  GetOutputContentsParams,
  SubmitJobFileParams,
  SubmitJobEmbeddedParams,
  SubmitJobAwsS3Params,
  SubmitJobJDBCParams,
} from "./types";

export class ModzyClient {
  modelClient: ModelClient;
  jobClient: JobClient;
  fileJobClient: FileJobClient;

  constructor({ url = DEFAULT_URL, apiKey, logging }: ClassInitiator) {
    if (!url) {
      console.error("url should be a valid, not-empty string");
      throw "Cannot initialize the modzy client: the url should be a valid, not-empty string";
    }
    if (!apiKey) {
      console.error("apiKey should be a valid, not-empty string");
      throw "Cannot initialize the modzy client: apiKey should be a valid, not-empty string";
    }
    this.modelClient = new ModelClient({ url, apiKey, logging });
    this.jobClient = new JobClient({ url, apiKey, logging });
    this.fileJobClient = new FileJobClient({ url, apiKey, logging });
  }

  /**
   * Get the ModelClient instance
   * @see {@link ModelClient}
   */
  getModelClient() {
    return this.modelClient;
  }

  /**
   * Get a list of models with very basic info such as modelId, versions, and latestVersion
   * based on specified params. Returns the first 500 models if no params are sent.
   */
  getModels(params: GetModelsParams = {}) {
    return this.modelClient.getModels(params);
  }

  /**
   * Get a list of all active models with information such as names, ids, descriptions,
   * active versions, and image URLs
   */
  getActiveModels() {
    return this.modelClient.getActiveModels();
  }

  /**
   * Get details relevant to all versions of the model with the given modelId
   * @param modelId The model's id
   */
  getModelById(modelId: string) {
    return this.modelClient.getModelById(modelId);
  }

  /**
   * Search for a model that matches a provided name. If the search finds multiple models,
   * it will return the closest match. The output includes all model details (modelId,
   * latestVersion, author, name, versions, and tags).
   */