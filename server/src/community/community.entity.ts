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
   * Required fields
   */

  @PrimaryGeneratedColumn()
  id: number; // Auto-generated

  @CreateDateColumn()
  createdAt: Date; // Auto-generated

  @UpdateDateColumn()
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

  @Column({ default: 0 })
  upvotes: number;

  /**
   * Optional fields
   */

  @Column()
  countryCode: string;

  @Column()
  port: number;

  @Column()
  youtubeTrailer: string;

  @Column()
  website?: string;

  @Column()
  youtube?: string;

  @Column()
  twitter?: string;

  @Column()
  discord?: string;

  @Column()
  telegram?: string;

  @Column()
  facebook?: string;

  @Column()
  instagram?: string;

  @Column()
  teamspeak?: string;
}
