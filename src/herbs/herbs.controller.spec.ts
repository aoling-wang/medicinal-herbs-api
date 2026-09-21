import { Test, TestingModule } from '@nestjs/testing';
import { HerbsController } from './herbs.controller';
import { HerbsService } from './herbs.service';
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

describe('HerbsController', () => {
  let controller: HerbsController;
  let service: {
    findAll: jest.Mock;
    findOne: jest.Mock;
    search: jest.Mock;
    findByTargetSystem: jest.Mock;
    findByUseablePart: jest.Mock;
    findByPreparationMethod: jest.Mock;
    create: jest.Mock;
    update: jest.Mock;
    remove: jest.Mock;
  };

  beforeEach(async () => {
    service = {
      findAll: jest.fn(),
      findOne: jest.fn(),
      search: jest.fn(),
      findByTargetSystem: jest.fn(),
      findByUseablePart: jest.fn(),
      findByPreparationMethod: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [HerbsController],
      providers: [
        {
          provide: HerbsService,
          useValue: service,
        },
      ],
    }).compile();

    controller = module.get<HerbsController>(HerbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('search should call herbsService.search with the query params and return the result', async () => {
    service.search.mockResolvedValue([mugwort]);

    const result = await controller.search('Mugwort', 'digestive', 'Pregnancy');

    expect(service.search).toHaveBeenCalledWith({
      name: 'Mugwort',
      medicinalUse: 'digestive',
      contraindication: 'Pregnancy',
    });
    expect(result).toEqual([mugwort]);
  });

  it('findByTargetSystem should call herbsService.findByTargetSystem with the param and return the result', async () => {
    service.findByTargetSystem.mockResolvedValue([mugwort]);

    const result = await controller.findByTargetSystem('Digestive System');

    expect(service.findByTargetSystem).toHaveBeenCalledWith('Digestive System');
    expect(result).toEqual([mugwort]);
  });

  it('findByUseablePart should call herbsService.findByUseablePart with the param and return the result', async () => {
    service.findByUseablePart.mockResolvedValue([mugwort]);

    const result = await controller.findByUseablePart('Leaves');

    expect(service.findByUseablePart).toHaveBeenCalledWith('Leaves');
    expect(result).toEqual([mugwort]);
  });

  it('findByPreparationMethod should call herbsService.findByPreparationMethod with the param and return the result', async () => {
    service.findByPreparationMethod.mockResolvedValue([mugwort]);

    const result = await controller.findByPreparationMethod('Tincture');

    expect(service.findByPreparationMethod).toHaveBeenCalledWith('Tincture');
    expect(result).toEqual([mugwort]);
  });

  it('update should call herbsService.update with the id and body and return the result', async () => {
    service.update.mockResolvedValue({ affected: 1 });

    const result = await controller.update('1', { name: 'Mugwort' });

    expect(service.update).toHaveBeenCalledWith('1', { name: 'Mugwort' });
    expect(result).toEqual({ affected: 1 });
  });
});
