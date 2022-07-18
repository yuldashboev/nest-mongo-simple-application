import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import config from './config/config';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(`mongodb://${config.MongoHost}:${config.MongoPort}`)],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
