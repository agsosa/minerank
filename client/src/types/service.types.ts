export interface IServiceError {
  get isAxiosError(): boolean;
  get message(): string;
  get statusCode(): number;
  toJSON(): any;
}

interface IServiceResponse<TData> {
  error?: IServiceError;
  data: TData;
}

export type AsyncServiceResponse<TData> = Promise<IServiceResponse<TData>>;

export enum LoadingState {
  PENDING,
  FAILED,
  SUCCESS,
  IDLE,
}
