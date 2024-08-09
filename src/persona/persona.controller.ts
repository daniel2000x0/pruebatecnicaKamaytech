import {   Controller,
    Post,
    Body,
    ValidationPipe,
    Put,
    Get,
    Delete,
    Param,
    Res,
    HttpStatus,
    UseGuards,} from '@nestjs/common';

import { PersonaService } from './persona.service';

import { CreatePersonaDto } from './dtos/create-persona.dto';
import { UpdatePersonaDto } from './dtos/update-persona.dto';
import { LoginPersonaDto } from './dtos/login-persona.dto';
import { JwtAuthGuard } from './jwt-auth-guard';
@Controller('users')
export class PersonaController {
    constructor(private personaService: PersonaService){}
    
    @Post('users')
    async registerUser( @Res() response,@Body(new ValidationPipe()) createPersona: CreatePersonaDto){
      try {
   
        const newPersona = await this.personaService.create(createPersona);
        return response.status(HttpStatus.CREATED).json({
          message: 'User has been created successfully',
          newPersona,
        });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: User not created!',
        error: 'Bad Request',
      });
    }
    }



    @Post('auth/login')
    async loginUser( @Res() response,@Body() LoginPersona: LoginPersonaDto){
     try {
   
       const newPersona = await this.personaService.login(LoginPersona);
      return response.status(HttpStatus.CREATED).json({
         message: 'User has been founding successfully',
          newPersona,
        });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: User not founded!',
        error: 'Bad Request',
      });
    }
    }

    @UseGuards(JwtAuthGuard)
    @Put('user/:id')
    async update(
      @Res() response,
      @Param('id') id: string,
      @Body(new ValidationPipe()) updatePersona: UpdatePersonaDto,
    ) {


      try {


      const newPersona = await this.personaService.update(id, updatePersona);
      return response.status(HttpStatus.CREATED).json({
        message: 'User has been created successfully',
        newPersona,
      });

    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Person not created!',
        error: 'Bad Request',
      });
    }
    }
    @UseGuards(JwtAuthGuard)
    @Get('users')
    async findAll(@Res() response) {
      
      try{
        const personaData = await  this.personaService.findAll();
        return response.status(HttpStatus.OK).json({
          message: 'All user data found successfully',
          personaData,
        });
       
        }catch(err){
          return response.status(err.status).json(err.response);
        }
    }
    @UseGuards(JwtAuthGuard)
    @Get('user/:id')
    async findOne(@Res() response,@Param('id') id: string) {
  
      try {
        const existingPerson = await this.personaService.findOne(id);
        return response.status(HttpStatus.OK).json({
          message: 'User found successfully',
          existingPerson,
        });
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }
    @UseGuards(JwtAuthGuard)
    @Delete('user/:id')
    async delete(@Res() response,@Param('id') id: string) {

      try {
        const deletedPerson = await this.personaService.delete(id);
        return response.status(HttpStatus.OK).json({
          message: 'User deleted successfully',
          deletedPerson,
        });
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }


}
