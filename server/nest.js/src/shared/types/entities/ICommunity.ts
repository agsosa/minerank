import { EditionEnum, PremiumTypeEnum } from '../enum/community.enum';

export interface ICommunity {
  /**
   * Non nullable fields
   */
  id: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  name: string;
  description: string;
  shortName: string;
  ip: string;
  edition: EditionEnum;
  version: string;
  gamemodes: string;
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
