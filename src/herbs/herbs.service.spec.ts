import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HerbsService } from './herbs.service';
import { Herb } from './herbs.entity';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';

describe('HerbsService', () => {
  let service: HerbsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HerbsService,
        {
          provide: getRepositoryToken(Herb),
          useValue: {
            find: jest.fn(),
            findOneBy: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<HerbsService>(HerbsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
