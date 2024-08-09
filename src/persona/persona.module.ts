import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {Persona, PersonaSchema} from './schemas/persona.schema';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';

import  {JwtModule} from  '@nestjs/jwt';
import { jwtConstanst } from './jwt.constants';
import { JwtStrategy } from './jwt.strategy';
@Module({
imports:[
    MongooseModule.forFeature([{
        name:Persona.name,
        schema: PersonaSchema,
    },
   
]),

JwtModule.register({
    secret:jwtConstanst.secret,
    signOptions:{expiresIn:'20h'},
}),
],
providers: [PersonaService,JwtStrategy],
controllers: [PersonaController]


})
export class PersonaModule {}
