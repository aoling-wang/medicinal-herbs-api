import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Herb {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    name!: string;

    @Column()
    activeCompounds!: string[];

    @Column()
    medicinalUses!: string[];

    @Column()
    targetSystem!: string[];

    @Column()
    useableParts!: string[];

    @Column()
    preparationMethods!: string[];

    @Column()
    interactions!: {
        compound: string;
        effect: string;
    }[];

    @Column()
    contraindications!: string[];
}