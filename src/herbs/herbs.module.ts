import { Module } from '@nestjs/common';
import { HerbsService } from './herbs.service';
import { HerbsController } from './herbs.controller';
import { Herb } from './herbs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Herb]),
  ],
  providers: [HerbsService],
  controllers: [HerbsController]
})
export class HerbsModule {}
