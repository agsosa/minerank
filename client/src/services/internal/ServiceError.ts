// Class to manage axios errors/exceptions

import axios from "axios";
import { IServiceError } from "src/types/service.types";

export function buildServiceError(error: any) {
  const result: IServiceError = {
    isAxiosError: axios.isAxiosError(error),
    message: error?.response?.data?.message || error?.message || "Internal Error",
    statusCode: error?.response?.status || 500,
  };

  return result;
}
