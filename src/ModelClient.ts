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
