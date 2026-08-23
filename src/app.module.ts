import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HerbsModule } from './herbs/herbs.module';

@Module({
  imports: [HerbsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
