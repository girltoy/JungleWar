
import axios from "axios";
import { parse as parseUrl } from "url";
import FormData from "form-data";
import * as http from "http";

import { JobClient } from "./JobClient";
import { ApiError } from "./ApiError";
import { Logger } from "./Logger";
import { humanReadToBytes, byteArrayToChunks, fileToChunks } from "./nodeUtils";
import { DEFAULT_URL } from "./constants";

import type {
  ClassInitiator,
  SubmitJobResponse,
  SubmitJobFileParams,
} from "./types";

interface SubmitOptions extends http.RequestOptions {
  protocol?: "https:" | "http:";
}

export class FileJobClient {
  logger: Logger;
  jobClient: JobClient;
  readonly baseUrl: string;
  readonly headers: {
    Authorization: string;
  };

  /**
   * Creates a JobClient
   * @param {Object} config object
   * @param {string} config.url - base url of modzy api (i.e.: https://app.modzy.com)
   * @param {string} config.apiKey - user's API key
   */
  constructor({ url = DEFAULT_URL, apiKey, logging }: ClassInitiator) {
    this.baseUrl = url;
    this.headers = {
      Authorization: `ApiKey ${apiKey}`,
    };
    this.jobClient = new JobClient({ url, apiKey });
    this.logger = new Logger(logging);
  }

  _getFeatures() {
    const requestURL = `${this.baseUrl}/api/jobs/features`;
    this.logger.debug(`_getFeatures GET ${requestURL}`);

    return axios