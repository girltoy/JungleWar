import axios from "axios";
import { compareTwoStrings } from "string-similarity";

import { ApiError } from "./ApiError";
import { Logger } from "./Logger";
import { DEFAULT_URL } from "./constants";

import type {
  ClassInitiator,
  GetModelsParams,
  GetModelDetailsParams,
  Model,
  LatestModel,
  GetModelByIdResponse,
  GetModelDetailsResponse,
  GetModelVersionsByIdResponse,
} from "./types";

interface ModelWithDistance extends GetModelByIdResponse {
  distance: number;
}

export class ModelClient {
  logger: Logger;
  readonly baseUrl: string;
  readonly headers: {
    Authorization: string;
  };

  /**
   * Creates a ModelClient
   * @param {Object} config object
   * @param {string} config.url - base url of modzy api (i.e.: https://app.modzy.com)
   * @param {string} config.apiKey - user's API key
   */
  constructor({ url = DEFAULT_URL, apiKey, logging }: ClassInitiator) {
    this.baseUrl = url;
    this.headers = {
      Authorization: `ApiKey ${apiKey}`,
    };
    this.logger = new Logger(logging);
  }

  /**
   * Get a list of models with very basic info such as modelId, versions, and latestVersion
   * based on specified params. Returns the first 500 models if no params are sent.
   *
   * @param {Object} criteria - Search criteria object
   * @param {string} criteria.modelId - The model's id
   * @param {string} criteria.author - The model publisher's name
   * @param {string} criteria.createdByEmail - The model publisher's email
   * @param {string} criteria.name - The model's name
   * @param {string} criteria.description - The model's description
   * @param {boolean} criteria.isActive - If the model is active or not
   * @param {boolean} criteria.isExpired - If the model is expired or not
   * @param {boolean} criteria.isFeatured - If the model is featured or not
   * @param {string} criteria.lastActiveDateTime - ISO 8601 date string representing when the model was last used
   * @param {string} criteria.expirationDateTime - ISO 8601 date string representing when the model expires
   * @param {number} criteria.page - This api call is paginated. This is the page of results to return
   * @param {number} criteria.perPage - This api call is paginated. This is number of results per page to return
   * @param {string} criteria.sortBy - Sort the results by this key
   * @param {"ASC" | "DESC"} criteria.direction - Sort direction of the results
   */
  getModels({
    modelId,
    author,
    createdByEmail,
    name,
    description,
    isActive,
    isExpired,
    isFeatured,
    lastActiveDateTime,
    expirationDateTime,
    page,
    perPage = 500,
    sortBy,
    direction,
  }: GetModelsParams = {}): Promise<Model[]> {
    const params = {
      modelId,
      author,
      createdByEmail,
      name,
      description,
      isActive,
      isExpired,
      isRecommended: isFeatured,
      lastActiveDateTime,
      expirationDateTime,
      "sort-by": sortBy,
      direction,
      page: page,
      "per-page": perPage,
    };

    let 