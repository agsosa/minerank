/**
 * Types related to the services layer
 */

interface IServiceResponse<TData> {
  error?: IServiceError;
  data: TData;
}

export type AsyncServiceResponse<TData> = Promise<IServiceResponse<TData>>;

export interface IServiceError {
  message: string | string[];
  statusCode: number;
  isAxiosError: boolean;
}

export enum LoadingState {
  PENDING,
  FAILED,
  SUCCESS,
  IDLE,
}
