import { IEntityBase } from 'src/shared/internal/IEntityBase';
import { EditionEnum, PremiumTypeEnum } from '../enum/community.enum';

export interface ICommunity extends IEntityBase {
  /**
   * Non nullable fields
   */
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
