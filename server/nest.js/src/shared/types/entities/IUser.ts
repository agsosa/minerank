import { IEntityBase } from 'src/shared/types/entities/IEntityBase';

export interface IUser extends IEntityBase {
  /**
   * Non nullable fields
   */

  username: string;
  email: string;
  password: string;

  /**
   * Nullable fields
   */
  // port: number | null;
}
