import { EntityBase } from 'src/@shared/internal/EntityBase';
import { IGameMode } from 'src/@shared/types/entities/IGameMode';
import { Community } from 'src/community/community.entity';
import { Column, Entity, Index, ManyToMany } from 'typeorm';

@Entity()
export class GameMode extends EntityBase implements IGameMode {
  @Column()
  label: string;

  @Column()
  @Index({ unique: true })
  shortName: string;

  @ManyToMany(() => Community, (community) => community.gamemodes)
  communities: Community[];

  communityCount: number;
}
