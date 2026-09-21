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

    findByMedicinalUse(medicinalUse: string) {
        return this.herbsRepository
            .createQueryBuilder('herb')
            .where('herb.medicinalUses LIKE :medicinalUse', { medicinalUse: `%${medicinalUse}%` })
            .getMany();
    }

    findByTargetSystem(targetSystem: string) {
        return this.herbsRepository
            .createQueryBuilder('herb')
            .where('herb.targetSystem LIKE :targetSystem', { targetSystem: `%${targetSystem}%` })
            .getMany();
    }

    findByUseablePart(useablePart: string) {
        return this.herbsRepository
            .createQueryBuilder('herb')
            .where('herb.useableParts LIKE :useablePart', { useablePart: `%${useablePart}%` })
            .getMany();
    }

    findByPreparationMethod(preparationMethod: string) {
        return this.herbsRepository
            .createQueryBuilder('herb')
            .where('herb.preparationMethods LIKE :preparationMethod', { preparationMethod: `%${preparationMethod}%` })
            .getMany();
    }

    search({
        name,
        medicinalUse,
        contraindication,
    }: {
        name?: string;
        medicinalUse?: string;
        contraindication?: string;
    }) {
        const query = this.herbsRepository.createQueryBuilder('herb');

        if (name) {
            query.andWhere('herb.name LIKE :name', { name: `%${name}%` });
        }

        if (medicinalUse) {
            query.andWhere('herb.medicinalUses LIKE :medicinalUse', { medicinalUse: `%${medicinalUse}%` });
        }

        if (contraindication) {
            query.andWhere('herb.contraindications LIKE :contraindication', { contraindication: `%${contraindication}%` });
        }

        return query.getMany();
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

    update(id: string, updatedData: {
        name?: string; 
        activeCompounds?: string[]; 
        medicinalUses?: string[]; 
        targetSystem?: string[]; 
        useableParts?: string[]; 
        preparationMethods?: string[]; 
        interactions?: { compound: string; effect: string }[]; 
        contraindications?: string[] 
    }) {
        return this.herbsRepository.update(id, updatedData);
    }
}
