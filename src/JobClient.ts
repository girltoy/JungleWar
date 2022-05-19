import axios from "axios";

import { ApiError } from "./ApiError";
import { Logger } from "./Logger";
import { DEFAULT_URL } from "./constants";

import type {
  ClassInitiator,
  GetJobHistoryParams,
  JobHistoryResponseItem,
  SubmitJobParams,
  SubmitJobTextParams,
  SubmitJobResponse,
  GetOutputContentsParams,
  SubmitJobJDBCParams,
  SubmitJobAwsS3Params,
  SubmitJobEmbeddedParams,
  EnginesResponse,
  GetJobResponse,
  GetResultResponse,
} from "./types";

export class JobClient {
  logger: Logger;
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
    this.logger = new Logger(logging);
  }

  /**
   * Call the Modzy API Service and query on the history of jobs
   */
  getJobHistory({
    user,
    accessKey,
    startDate,
    endDate,
    model,
    status,
    page = 1,
    perPage = 100,
    direction = "DESC",
    sortBy = "createdAt",
  }: GetJobHistoryParams = {}): Promise<JobHistoryResponseItem[]> {
    const defaultStartDate = new Date();
    defaultStartDate.s