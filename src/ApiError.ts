type ApiErrorConfig = {
  url?: string;
  code?: number;
  message?: string;
};

type CustomErrorType = {
  message: string;
  response: {
    data: {
      message: string;
      statusCode: number;
    }