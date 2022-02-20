import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IEntityBase } from './IEntityBase';

export class EntityBase implements IEntityBase {
  @PrimaryGeneratedColumn()
  id: number; // Auto-generated

  @CreateDateColumn()
  createdAt: Date; // Auto-generated

  @UpdateDateColumn()
  updatedAt: Date; // Auto-generated
}
