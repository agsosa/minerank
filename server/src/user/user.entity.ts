import { Entity, Column } from 'typeorm';
import { IUser } from 'src/@shared/types/entities/Iuser';
import { EntityBase } from 'src/@shared/internal/EntityBase';

@Entity()
export class User extends EntityBase implements IUser {
  /**
   * Non nullable fields
   */

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  /**
   * Nullable fields (needs explicit type)
   */

  /*@Column({ type: 'varchar', nullable: true })
  countryCode: string | null;*/
}
