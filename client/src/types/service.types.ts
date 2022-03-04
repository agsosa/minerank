export interface IServiceError {
  originalError?: any;
  get isAxiosError(): boolean;
  get message(): string;
  get statusCode(): number;
}

interface IServiceResponse<TData> {
  error?: IServiceError;
  data?: TData;
}

export type AsyncServiceResponse<TData> = Promise<IServiceResponse<TData>>;
