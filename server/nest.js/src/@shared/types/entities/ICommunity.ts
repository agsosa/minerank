import { EditionEnum, PremiumTypeEnum } from '../enum/community.enum';
import { IGameMode } from './IGameMode';

// TODO: Ver tema multilanguage
export interface ICommunity {
  /**
   * Entity Base fields
   */
  id: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;

  /**
   * Non nullable fields
   */
  name: string;
  description: string;
  shortName: string;
  ip: string;
  edition: EditionEnum;
  version: string;
  gamemodes: IGameMode[];
  user: string;
  premiumType: PremiumTypeEnum;
  upvotes: number;
  isApproved: boolean;
  isFeatured: boolean;

  /**
   * Nullable fields
   */
  port: number | null;
  countryCode: string | null;
  youtubeTrailer: string | null;
  // TODO: Add images, portait, main photo, etc
  website: string | null;
  youtube: string | null;
  twitter: string | null;
  discord: string | null;
  telegram: string | null;
  facebook: string | null;
  instagram: string | null;
  teamspeak: string | null;
}

export const ListCommunityOmittedKeys = [
  'description',
  'youtubeTrailer',
  'facebook',
  'twitter',
  'youtube',
  'discord',
  'facebook',
  'telegram',
  'teamspeak',
  'instagram',
  'website',
] as const;

// Interface returned on list endpoints
export type IListCommunity = Omit<ICommunity, typeof ListCommunityOmittedKeys[number]>;
