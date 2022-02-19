import { ICommunity } from '../entities/ICommunity';

type includedProperties =
  | 'name'
  | 'description'
  | 'shortName'
  | 'ip'
  | 'edition'
  | 'version' // TODO: Ver tema relaciones
  | 'gamemodes' // TODO: Ver tema relaciones
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

export type ICreateCommunityDto = Pick<ICommunity, includedProperties>;
