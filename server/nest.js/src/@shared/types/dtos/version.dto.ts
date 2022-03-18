import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { IVersion } from '../entities/IVersion';

/**
 * Input DTOs
 */
export type ICreateVersionDto = Pick<IVersion, 'label'>;
export type IUpdateVersionDto = Partial<ICreateVersionDto>;

/**
 * Output DTOs
 */
export type ICreateVersionResponseDto = InsertResult;
export type IFindVersionResponseDto = IVersion | undefined | null;
export type IFindVersionsResponseDto = Array<IVersion>;
export type IRemoveVersionResponseDto = DeleteResult;
export type IUpdateVersionResponseDto = UpdateResult;
