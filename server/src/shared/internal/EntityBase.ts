import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class EntityBase {
  @PrimaryGeneratedColumn()
  id: number; // Auto-generated

  @CreateDateColumn()
  createdAt: Date; // Auto-generated

  @UpdateDateColumn()
  updatedAt: Date; // Auto-generated
}
