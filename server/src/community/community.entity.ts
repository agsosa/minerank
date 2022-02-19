import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ICommunity } from 'src/shared/types/entities/ICommunity';
import { EditionEnum, PremiumTypeEnum } from 'src/shared/types/enum/community.enum';

@Entity()
export class Community implements ICommunity {
  /**
   * Non nullable fields
   */

  @PrimaryGeneratedColumn()
  id: number; // Auto-generated

  @CreateDateColumn({ nullable: false })
  createdAt: Date; // Auto-generated

  @UpdateDateColumn({ nullable: false })
  updatedAt: Date; // Auto-generated

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  description: string;

  @Column({
    nullable: false,
  })
  shortName: string;

  @Column({
    nullable: false,
  })
  ip: string;

  @Column({
    nullable: false,
  })
  edition: EditionEnum;

  @Column({
    nullable: false,
  })
  version: string; // TODO: Add table+relationship

  @Column({
    nullable: false,
  })
  gamemodes: string; // TODO: Add table+relationship

  @Column({
    nullable: false,
  })
  user: string; // TODO: Add relationship

  @Column({
    nullable: false,
  })
  premiumType: PremiumTypeEnum;

  @Column({ nullable: false, default: false })
  isActive: boolean;

  @Column({ nullable: false, default: 0 })
  upvotes: number;

  /**
   * Nullable fields
   */

  @Column({ nullable: true })
  countryCode: string;

  @Column({ nullable: true })
  port: number;

  @Column({ nullable: true })
  youtubeTrailer: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  youtube: string;

  @Column({ nullable: true })
  twitter: string;

  @Column({ nullable: true })
  discord: string;

  @Column({ nullable: true })
  telegram: string;

  @Column({ nullable: true })
  facebook: string;

  @Column({ nullable: true })
  instagram: string;

  @Column({ nullable: true })
  teamspeak: string;
}
