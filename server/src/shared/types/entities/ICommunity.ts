import { EditionEnum, PremiumTypeEnum } from '../enum/community.enum';

export interface ICommunity {
  /**
   * Required fields
   */
  id: number;
  createdAt: Date;
  updatedAt: Date;
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
  isActive: boolean;

  /**
   * Optional fields
   */
  port?: number;
  countryCode?: string;
  youtubeTrailer?: string;
  // TODO: Add images, portait, main photo, etc
  website?: string;
  youtube?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
  facebook?: string;
  instagram?: string;
  teamspeak?: string;
}
