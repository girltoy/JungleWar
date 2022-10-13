
/* eslint-disable @typescript-eslint/no-explicit-any */

export type LoggingLevel = "off" | "on" | "verbose";

export type ClassInitiator = {
  url?: string;
  apiKey: string;
  logging?: LoggingLevel;
};

export type GetModelsParams = {
  modelId?: string;
  author?: string;
  createdByEmail?: string;
  name?: string;
  description?: string;
  isActive?: boolean;
  isExpired?: boolean;
  isFeatured?: boolean;
  lastActiveDateTime?: string | Date;
  expirationDateTime?: string | Date;
  page?: number;
  perPage?: number;
  direction?: "ASC" | "DESC";
  sortBy?:
    | "modelId"
    | "author"
    | "submittedByEmail"
    | "name"
    | "isExpired"
    | "isActive"
    | "latestVersion"
    | "isRecommended"
    | "lastActiveDateTime"
    | "expirationDateTime";
};

export type GetModelDetailsParams = { modelId: string; version: string };

export interface GetJobHistoryParams {
  user?: string;
  accessKey?: string;
  startDate?: string;
  endDate?: string;
  model?: string;
  status?: "ALL" | "TERMINATED" | "TERMINATED_WITH_ERROR" | "PENDING";
  page?: number;
  perPage?: number;
  direction?: "ASC" | "DESC";
  sortBy?: string;
}

export interface SubmitJobParams {
  model: {
    identifier: string;
    version: string;
  };
  explain?: boolean;
  input?: Record<string, any>;
}

export interface SubmitJobTextParams {
  modelId: string;
  version: string;
  sources: {
    [key: string]: Record<string, string>;
  };
  explain?: boolean;