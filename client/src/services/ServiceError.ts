// Class to manage axios errors/exceptions

import axios from "axios";
import { IServiceError } from "src/types/service.types";

export class ServiceError implements IServiceError {
    originalError?: any;
  
    constructor(error: unknown) {
      this.originalError = error;
    }
  
    public get isAxiosError(): boolean {
      return axios.isAxiosError(this.originalError);
    }
  
    public get message(): string {
      return this.originalError?.response?.data?.message || this.originalError.message;
    }
  
    public get statusCode(): number {
      return this.originalError?.response?.status || 500;
    }
  }