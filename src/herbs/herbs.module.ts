import { Module } from '@nestjs/common';
import { HerbsService } from './herbs.service';
import { HerbsController } from './herbs.controller';

@Module({
  providers: [HerbsService],
  controllers: [HerbsController]
})
export class HerbsModule {}
