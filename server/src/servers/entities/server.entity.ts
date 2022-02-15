import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Edition, PremiumType } from '../shared/server.enums';

@Entity()
export class Server {
  @PrimaryGeneratedColumn()
  id: number;

  // Server details
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  youtubeTrailer: string;

  @Column()
  path: string;

  @Column()
  ip: string;

  @Column({
    default: Edition.JAVA,
  })
  edition: Edition;

  @Column()
  port: number;

  @Column()
  version: string; // TODO: Add table+relationship

  @Column()
  gamemodes: string; // TODO: Add table+relationship?

  @Column()
  user: string; // TODO: Add relationship

  @Column()
  premiumType: PremiumType;

  @Column()
  countryCode: string;

  // Server status
  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 })
  upvotes: number;

  // Social media
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

  // Timestamps
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
