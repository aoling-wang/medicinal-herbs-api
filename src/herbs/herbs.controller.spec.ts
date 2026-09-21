import { Test, TestingModule } from '@nestjs/testing';
import { HerbsController } from './herbs.controller';
import { HerbsService } from './herbs.service';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';

describe('HerbsController', () => {
  let controller: HerbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HerbsController],
      providers: [
        {
          provide: HerbsService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<HerbsController>(HerbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
