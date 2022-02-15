import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Server {
  @PrimaryGeneratedColumn()
  id: number;

  // Server details
  @Column({
    length: 36,
  })
  name: string;

  @Column({
    length: 280,
  })
  description: string;

  @Column({
    length: 24,
  })
  path: string;

  @Column()
  ip: string;

  @Column()
  version: string;

  @Column()
  premiumType: string;

  @Column()
  countryCode: string;

  // Server status
  @Column({ default: true })
  isActive: boolean;

  @Column()
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
