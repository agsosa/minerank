import { Entity, Column, Index, ManyToMany, JoinTable } from 'typeorm';
import {
  ICommunity,
  IListCommunity,
  ListCommunityOmittedKeys,
} from 'src/@shared/types/entities/ICommunity';
import { EditionEnum, PremiumTypeEnum } from 'src/@shared/types/enum/community.enum';
import { EntityBase } from 'src/@shared/internal/EntityBase';
import { GameMode } from 'src/gamemode/gamemode.entity';

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
  @Index({ unique: true })
  shortName: string;

  @Column()
  ip: string;

  @Column()
  edition: EditionEnum;

  @Column()
  version: string; // TODO: Add table+relationship

  @ManyToMany(() => GameMode, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  gamemodes: GameMode[];

  @Column()
  user: string; // TODO: Add relationship

  @Column()
  premiumType: PremiumTypeEnum;

  @Column({ default: false })
  isApproved: boolean;

  @Column({ default: false })
  isFeatured: boolean;

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

  toListMember(): IListCommunity {
    for (const key of ListCommunityOmittedKeys) {
      this[key] = '';
    }

    return this;
  }
}
