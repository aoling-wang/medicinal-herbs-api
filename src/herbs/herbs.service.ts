import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Herb } from './herbs.entity';

@Injectable()
export class HerbsService {
    constructor(
        @InjectRepository(Herb)
        private readonly herbsRepository: Repository<Herb>,
    ) {}

    findAll() {
        return this.herbsRepository.find();
    }

    findOne(id: string) {
        return this.herbsRepository.findOneBy({ id: Number(id) });
    }

    create({
        name, 
        activeCompounds, 
        medicinalUses, 
        targetSystem,
        useableParts,
        preparationMethods,
        interactions,
        contraindications,
    }: {
        name: string, 
        activeCompounds: string[],
        medicinalUses: string[], 
        targetSystem: string[], 
        useableParts: string[], 
        preparationMethods: string[], 
        interactions: { compound: string; effect: string }[], 
        contraindications: string[]
    }) {
        const herb = this.herbsRepository.create({
            name,
            activeCompounds,
            medicinalUses,
            targetSystem,
            useableParts,
            preparationMethods,
            interactions,
            contraindications,
        });

        return this.herbsRepository.save(herb);
    }

    remove(id: string) {
        return this.herbsRepository.delete(id);
    }
}
