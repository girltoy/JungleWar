
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
}

export interface GetOutputContentsParams {
  jobId: string;
  inputKey: string;
  outputName: string;
  responseType?: "json" | "blob" | "arraybuffer";
}

export interface SubmitJobFileParams {
  modelId: string;
  version: string;
  sources: {
    [key: string]: Record<string, any>;
  };
  explain?: boolean;
}

export interface SubmitJobJDBCParams {
  modelId: string;
  version: string;
  url: string;
  username: string;
  password: string;
  driver: string;
  query: string;
  explain?: boolean;
}

export interface SubmitJobAwsS3Params {
  modelId: string;
  version: string;
  accessKeyID: string;
  secretAccessKey: string;
  region: string;
  sources: any;
  explain?: boolean;
}

export interface SubmitJobEmbeddedParams {
  modelId: string;
  version: string;
  mediaType: string;
  sources: {
    [key: string]: Record<string, any>;
  };
  explain?: boolean;
}

// =======================================================================================
// API Responses
// =======================================================================================
export interface Model {
  latestVersion: string;
  modelId: string;
  versions: string[];
}

type Image = {
  url: string;
  caption: string;
  relationType: string;
};

type Tag = {
  dataType: string;
  identifier: string;
  isCategorical: boolean;
  name: string;
};

type Feature = {
  description?: string;
  identifier: string;
  name: string;
};

export interface LatestModel {
  activeVersions: string[];
  author: string;
  creationDateTime: string;
  description: string;
  features: Feature[];
  identifier: string;
  images: Image[];
  isActive: boolean;
  isAvailable: boolean;
  isCommercial: boolean;
  isExperimental: boolean;
  isRecommended: boolean;
  latestVersion: string;
  longDescription: string;
  name: string;
  permalink: string;
  sourceType: string;
  tags: Tag[];
  updateDateTime: string;
}

type AccessKey = {
  prefix: string;
  isDefault: boolean;
};

export interface JobHistoryResponseItem {
  jobIdentifier: string;
  submittedBy: string;
  accountIdentifier: string;
  model: {
    identifier: string;
    version: string;
    name: string;
  };
  status: string;
  createdAt: string;
  updatedAt: string;
  submittedAt: string;
  total: number;
  pending: number;
  completed: number;
  failed: number;
  elapsedTime: number;
  queueTime: number;
  user: {
    identifier: string;
    externalIdentifier: string;
    firstName: string;
    lastName: string;
    email: string;
    accessKeys: AccessKey[];
    status: string;
    title: string;
  };
  jobInputs: any[];
  explain: boolean;
}

export interface GetModelByIdResponse {
  modelId: string;
  latestVersion: string;
  latestActiveVersion: string;