import { ICommunity } from '../entities/ICommunity';

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
export type IFindAllCommunitiesDto = { page?: number; limit?: number };
