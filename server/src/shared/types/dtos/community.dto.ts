import { ICommunity } from '../entities/ICommunity';

// TODO: Ver tema media
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

export type ICreateCommunityDto = Pick<ICommunity, CreateCommunityProperties>;

export type IUpdateCommunityDto = Partial<ICreateCommunityDto>;
