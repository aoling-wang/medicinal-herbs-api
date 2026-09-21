import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HerbsService } from './herbs.service';
import { Herb } from './herbs.entity';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';

// First entry from medicinal-herbs-data.json, used as expected data across tests
const mugwort = {
  id: 1,
  name: 'Mugwort',
  activeCompounds: [
    'Thujone',
    'Cineole',
    'Camphor',
    'Linalool',
    'Flavonoids',
    'Coumarins',
    'Sesquiterpene lactones',
  ],
  medicinalUses: [
    'Traditional digestive support',
    'Traditional menstrual-cramp support',
    'Traditional appetite support',
  ],
  targetSystem: ['Digestive System', 'Reproductive System', 'Nervous System'],
  useableParts: ['Leaves', 'Stems', 'Flowers', 'Roots'],
  preparationMethods: [
    'Infusion (Tea)',
    'Tincture',
    'Moxibustion',
    'Topical preparations',
  ],
  interactions: [
    {
      compound: 'Thujone',
      effect:
        'High exposure may affect the nervous system and may increase seizure risk; avoid concentrated preparations with seizure disorders.',
    },
    {
      compound: 'Mugwort constituents',
      effect:
        'Potential additive effects with sedating medicines are possible, although clinical interaction data are limited.',
    },
  ],
  contraindications: [
    'Pregnancy; medicinal doses should be avoided because safety is not established and uterine effects are a concern',
    'Asteraceae family allergy',
    'Seizure disorders, especially with concentrated preparations',
  ],
};

describe('HerbsService', () => {
  let service: HerbsService;
  let repository: {
    find: jest.Mock;
    findOneBy: jest.Mock;
    create: jest.Mock;
    save: jest.Mock;
    delete: jest.Mock;
    update: jest.Mock;
    createQueryBuilder: jest.Mock;
  };
  let queryBuilder: {
    where: jest.Mock;
    andWhere: jest.Mock;
    getMany: jest.Mock;
  };

  beforeEach(async () => {
    queryBuilder = {
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      getMany: jest.fn(),
    };

    repository = {
      find: jest.fn(),
      findOneBy: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      delete: jest.fn(),
      update: jest.fn(),
      createQueryBuilder: jest.fn(() => queryBuilder),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HerbsService,
        {
          provide: getRepositoryToken(Herb),
          useValue: repository,
        },
      ],
    }).compile();

    service = module.get<HerbsService>(HerbsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByTargetSystem should query with a LIKE clause and return the first entry', async () => {
    queryBuilder.getMany.mockResolvedValue([mugwort]);

    const result = await service.findByTargetSystem('Digestive System');

    expect(queryBuilder.where).toHaveBeenCalledWith(
      'herb.targetSystem LIKE :targetSystem',
      { targetSystem: '%Digestive System%' },
    );
    expect(result[0]).toEqual(mugwort);
  });

  it('findByUseablePart should query with a LIKE clause and return the first entry', async () => {
    queryBuilder.getMany.mockResolvedValue([mugwort]);

    const result = await service.findByUseablePart('Leaves');

    expect(queryBuilder.where).toHaveBeenCalledWith(
      'herb.useableParts LIKE :useablePart',
      { useablePart: '%Leaves%' },
    );
    expect(result[0]).toEqual(mugwort);
  });

  it('findByPreparationMethod should query with a LIKE clause and return the first entry', async () => {
    queryBuilder.getMany.mockResolvedValue([mugwort]);

    const result = await service.findByPreparationMethod('Tincture');

    expect(queryBuilder.where).toHaveBeenCalledWith(
      'herb.preparationMethods LIKE :preparationMethod',
      { preparationMethod: '%Tincture%' },
    );
    expect(result[0]).toEqual(mugwort);
  });

  it('search should apply andWhere clauses for each provided filter and return the first entry', async () => {
    queryBuilder.getMany.mockResolvedValue([mugwort]);

    const result = await service.search({
      name: 'Mugwort',
      medicinalUse: 'digestive',
      contraindication: 'Pregnancy',
    });

    expect(queryBuilder.andWhere).toHaveBeenCalledWith('herb.name LIKE :name', {
      name: '%Mugwort%',
    });
    expect(queryBuilder.andWhere).toHaveBeenCalledWith(
      'herb.medicinalUses LIKE :medicinalUse',
      { medicinalUse: '%digestive%' },
    );
    expect(queryBuilder.andWhere).toHaveBeenCalledWith(
      'herb.contraindications LIKE :contraindication',
      { contraindication: '%Pregnancy%' },
    );
    expect(result[0]).toEqual(mugwort);
  });

  it('update should call repository.update with the id and updated data', async () => {
    repository.update.mockResolvedValue({ affected: 1 });

    const result = await service.update('1', { name: mugwort.name });

    expect(repository.update).toHaveBeenCalledWith('1', { name: mugwort.name });
    expect(result).toEqual({ affected: 1 });
  });
});
