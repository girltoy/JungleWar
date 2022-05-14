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
  Eng