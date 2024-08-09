import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Persona} from './schemas/persona.schema';
import { Model } from 'mongoose';
import { UpdatePersonaDto } from './dtos/update-persona.dto';
import { CreatePersonaDto } from './dtos/create-persona.dto';
import {hash,compare}  from  'bcrypt';
import { LoginPersonaDto } from './dtos/login-persona.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class PersonaService {
    constructor(
   @InjectModel(Persona.name) private readonly personaModel: Model<Persona>, private jwtService: JwtService){}

    async create(persona: CreatePersonaDto){
      const {password} = persona;
      const plainToHash = await  hash(password, 10);
      persona={...persona,password:plainToHash};
        const createdPersona = new this.personaModel(persona);
         return createdPersona.save();
    }


    async login(persona: LoginPersonaDto){
      const {email,password}=persona;
      const findUser = await this.personaModel.findOne({email});
    if(!findUser)  throw new  HttpException('USER_NOT_FOUND',404);
   
    const  checkPassword  = await compare(password,findUser.password);
    
    if(!checkPassword)  throw new  HttpException('PASSWORD_INVALID',403);
    const payload= {id:findUser.id,name:findUser.name}
    const token = await this.jwtService.sign(payload);
    const data = {
      user:findUser,
      token
    };
    return data;
    }
    async update(id: string, persona: UpdatePersonaDto) {
        return this.personaModel
          .findByIdAndUpdate(id, persona, {
            new: true,
          })
          .exec();
      }
    
      async findAll() {
        return this.personaModel.find().exec();
      }
    
      async findOne(id: string) {
        return this.personaModel.findById(id).exec();
      }
    
      async delete(id: string) {
        return this.personaModel.findByIdAndDelete(id).exec();
      }



}
