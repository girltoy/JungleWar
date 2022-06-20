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
    defaultStartDate.setDate(defaultStartDate.getDate() - 30);

    const params = {
      user: user,
      accessKey: accessKey,
      startDate: startDate || defaultStartDate.toISOString(),
      endDate: endDate,
      model: model,
      status: status,
      "sort-by": sortBy,
      direction: direction,
      page: page,
      "per-page": perPage,
    };

    let key: keyof typeof params;

    for (key in params) {
      // catch both undefined and null
      if (params?.[key] == null) {
        delete params[key];
      }
    }

    const requestUrl = `${this.baseUrl}/api/jobs/history`;
    this.logger.debug(`getJobHistory(${params}) GET ${requestUrl}`);

    return axios
      .get(requestUrl, {
        headers: this.headers,
        params,
      })
      .then((response) => {
        this.logger.info("getJobHistory response", response);
        return response.data;
      })
      .catch((error) => {
        this.logger.error("getJobHistory error", error);
        throw new ApiError(error);
      });
  }

  /**
   * Call the Modzy API Service that return a job instance by it's identifier
   */
  getJob(jobId: string): Promise<GetJobResponse> {
    const requestUrl = `${this.baseUrl}/api/jobs/${jobId}`;
    this.logger.debug(`getJob GET ${requestUrl}`);

    return axios
      .get(requestUrl, { headers: this.headers })
      .then((response) => {
        this.logger.info("getJobHistory response", response);
        return response.data;
      })
      .catch((error) => {
        this.logger.error("getJobHistory error", error);
        throw new ApiError(error);
      });
  }

  getResult(jobId: string): Promise<GetResultResponse> {
    const requestUrl = `${this.baseUrl}/api/results/${jobId}`;
    this.logger.debug(`getResult GET ${requestUrl}`);

    return axios
      .get(requestUrl, { headers: this.headers })
      .then((response) => {
        this.logger.info("getResult response", response);
        return response.data;
      })
      .catch((error) => {
        this.logger.error("getResult error", error);
        throw new ApiError(error);
      });
  }

  getOutputContents({
    jobId,
    inputKey,
    outputName,
    responseType = "json",
  }: GetOutputContentsParams): Promise<unknown> {
    const requestUrl = `${this.baseUrl}/api/results/${jobId}/datasource/${inputKey}/output/${outputName}`;
    this.logger.debug(`getOutputContents G