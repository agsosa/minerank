import { EntityBase } from 'src/@shared/internal/EntityBase';
import { IGameMode } from 'src/@shared/types/entities/IGameMode';
import { Community } from 'src/community/community.entity';
import { Column, Entity, Index, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class GameMode extends EntityBase implements IGameMode {
  @Column()
  label_es: string;

  @Column()
  label_en: string;

  @Column()
  @Index({ unique: true })
  shortName: string;

 /* @ManyToMany(() => Community)
  @JoinTable()
  communities: Community[];*/
}
