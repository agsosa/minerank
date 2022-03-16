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
  label_en: string;
  label_es: string;
  shortName: string;
}
