import { EntityBase } from "src/@shared/internal/EntityBase";
import { IGameMode } from "src/@shared/types/entities/IGameMode";
import { Column, Entity, Index } from "typeorm";

@Entity()
export class GameMode extends EntityBase implements IGameMode {
    @Column()
    label_es: string;

    @Column()
    label_en: string;

    @Column()
    @Index({ unique: true })
    shortName: string;
}