import { Edition, PremiumType } from '../enums/servers.enums';

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
  edition: Edition;
  version: string;
  gamemodes: string;
  user: string;
  premiumType: PremiumType;
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
