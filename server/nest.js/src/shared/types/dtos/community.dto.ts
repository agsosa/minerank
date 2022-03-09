import { ICommunity } from '../entities/ICommunity';
import { IPaginatedDto } from './paginated.dto';

// TODO: Separar en archivos, dejar mas claro que son interfaces

// TODO: Ver tema media
// Keyof ICommunity
type CreateCommunityProperties =
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
  | 'teamspeak';

// Keyof ICommunity
type SearchCommunityProperties = 'isFeatured';

export type ICreateCommunityDto = Pick<ICommunity, CreateCommunityProperties>;
export type IUpdateCommunityDto = Partial<ICreateCommunityDto>;
export type ISearchCommunityDto = Pick<ICommunity, SearchCommunityProperties>;
export type IFindCommunitiesDto = { page?: number; limit?: number };
export type IFindCommunitiesResponseDto = IPaginatedDto<{
  featured: ICommunity[];
  latest: ICommunity[];
  normal: ICommunity[];
}>;
