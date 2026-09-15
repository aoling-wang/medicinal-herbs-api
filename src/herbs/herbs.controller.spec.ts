import { Test, TestingModule } from '@nestjs/testing';
import { HerbsController } from './herbs.controller';
import {describe, it, expect, beforeEach} from '@jest/globals';

describe('HerbsController', () => {
  let controller: HerbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HerbsController],
    }).compile();

    controller = module.get<HerbsController>(HerbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
