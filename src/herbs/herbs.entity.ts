import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Herb {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    name!: string;

    @Column( "simple-array" )
    activeCompounds!: string[];

    @Column( "simple-array" )
    medicinalUses!: string[];

    @Column( "simple-array" )
    targetSystem!: string[];

    @Column( "simple-array" )
    useableParts!: string[];

    @Column( "simple-array" )
    preparationMethods!: string[];

    @Column( "simple-json" )
    interactions!: {
        compound: string;
        effect: string;
    }[];

    @Column( "simple-array" )
    contraindications!: string[];
}