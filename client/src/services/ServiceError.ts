// Class to manage axios errors/exceptions

import axios from "axios";
import { IServiceError } from "src/types/service.types";

export class ServiceError implements IServiceError {
  private readonly originalError?: any;

  constructor(error: unknown) {
    this.originalError = error;
  }

  get isAxiosError(): boolean {
    return axios.isAxiosError(this.originalError);
  }

  get message(): string {
    return this.originalError?.response?.data?.message || this.originalError.message;
  }

  get statusCode(): number {
    return this.originalError?.response?.status || 500;
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      isAxiosError: this.isAxiosError,
    };
  }
}
