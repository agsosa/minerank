import { Entity, Column } from 'typeorm';
import { ICommunity } from 'src/shared/types/entities/ICommunity';
import { EditionEnum, PremiumTypeEnum } from 'src/shared/types/enum/community.enum';
import { EntityBase } from 'src/shared/internal/EntityBase';

@Entity()
export class Community extends EntityBase implements ICommunity {
  /**
   * Non nullable fields
   */

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  shortName: string;

  @Column()
  ip: string;

  @Column()
  edition: EditionEnum;

  @Column()
  version: string; // TODO: Add table+relationship

  @Column()
  gamemodes: string; // TODO: Add table+relationship

  @Column()
  user: string; // TODO: Add relationship

  @Column()
  premiumType: PremiumTypeEnum;

  @Column({ default: false })
  isActive: boolean;

  @Column({ default: 0 })
  upvotes: number;

  /**
   * Nullable fields (needs explicit type)
   */

  @Column({ type: 'varchar', nullable: true })
  countryCode: string | null;

  @Column({ type: 'int', nullable: true })
  port: number | null;

  @Column({ type: 'varchar', nullable: true })
  youtubeTrailer: string | null;

  @Column({ type: 'varchar', nullable: true })
  website: string | null;

  @Column({ type: 'varchar', nullable: true })
  youtube: string | null;

  @Column({ type: 'varchar', nullable: true })
  twitter: string | null;

  @Column({ type: 'varchar', nullable: true })
  discord: string | null;

  @Column({ type: 'varchar', nullable: true })
  telegram: string | null;

  @Column({ type: 'varchar', nullable: true })
  facebook: string | null;

  @Column({ type: 'varchar', nullable: true })
  instagram: string | null;

  @Column({ type: 'varchar', nullable: true })
  teamspeak: string | null;
}