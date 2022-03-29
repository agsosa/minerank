import { EntityBase } from 'src/@shared/internal/EntityBase';
import { IVersion } from 'src/@shared/types/entities/IVersion';
import { Community } from 'src/community/community.entity';
import { Column, Entity, Index, ManyToMany } from 'typeorm';

@Entity()
export class Version extends EntityBase implements IVersion {
  @Column()
  @Index({ unique: true })
  label: string;

  @ManyToMany(() => Community, (community) => community.versions)
  communities: Community[];

  communityCount: number;
}
