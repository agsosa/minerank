export interface IServiceError {
  message: string | string[];
  statusCode: number;
  isAxiosError: boolean;
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
