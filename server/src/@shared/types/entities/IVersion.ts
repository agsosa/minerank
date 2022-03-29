export interface IVersion {
  /**
   * Entity Base fields
   */
  id: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;

  /**
   * Non nullable fields
   */
  label: string;
  communityCount: number;
}
