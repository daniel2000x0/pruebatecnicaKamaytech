import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import {ConfigModule} from '@nestjs/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaModule } from './persona/persona.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.83kpd.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`,
  ), PersonaModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
