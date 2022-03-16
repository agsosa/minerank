import { ICommunity, IListCommunity } from '../entities/ICommunity';
import { IPaginatedDto } from './paginated.dto';

/**
 * Input DTOs
 */
export type ICreateCommunityDto = Pick<
  ICommunity,
  | 'name'
  | 'description'
  | 'shortName'
  | 'ip'
  | 'edition'
  | 'version' // TODO: Ver tema relaciones
  | 'gamemodes' // TODO: Ver tema relaciones
  | 'user' // TODO: Ver tema relaciones/auth
  | 'premiumType'
  | 'port'
  | 'countryCode'
  | 'youtubeTrailer'
  | 'website'
  | 'youtube'
  | 'twitter'
  | 'discord'
  | 'telegram'
  | 'facebook'
  | 'instagram'
  | 'teamspeak'
>;

export type IUpdateCommunityDto = Partial<ICreateCommunityDto>;

export type ICommunityFilters = Pick<ICommunity, 'isFeatured'>;

export type ISearchCommunitiesDto = {
  page: number;
  limit: number;
  filter?: ICommunityFilters;
  includeLatest?: boolean;
  separateFeatured?: boolean;
  includeUnapproved?: boolean;
};

/**
 * Output DTOs
 */
export type IFindShortNamesResponseDto = Array<string>;

export type ISearchCommunitiesResponseDto = IPaginatedDto<{
  featured: Array<IListCommunity>;
  latest: Array<IListCommunity>;
  normal: Array<IListCommunity>;
}>;

export type IFindCommunityResponseDto = ICommunity | undefined | null;

export type IFindAllCommunitiesResponseDto = {
  items: Array<IListCommunity>;
  total: number;
  featured: number;
  approved: number;
  unapproved: number;
};
