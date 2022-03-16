import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { IGameMode } from '../entities/IGameMode';

/**
 * Input DTOs
 */
export type ICreateGameModeDto = Pick<IGameMode, 'label_en' | 'label_es' | 'shortName'>;

/**
 * Output DTOs
 */
export type ICreateGameModeResponseDto = InsertResult;
export type IFindGameModeResponseDto = IGameMode | undefined | null;
export type IFindGameModesResponseDto = Array<IGameMode>;
export type IRemoveGameModeResponseDto = DeleteResult;
export type IUpdateGameModeResponseDto = UpdateResult;
