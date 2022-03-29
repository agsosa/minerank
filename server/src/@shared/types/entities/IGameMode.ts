export interface IGameMode {
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
  shortName: string;
  communityCount: number;
}
