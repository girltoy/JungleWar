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
   * @para