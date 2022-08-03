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
