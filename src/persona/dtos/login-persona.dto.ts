import {IsEmail, IsNotEmpty, MaxLength, MinLength} from 'class-validator';



export class LoginPersonaDto{
  
    @IsEmail()
    @IsNotEmpty()
    email: string;
   
@MinLength(4)
@MaxLength(12)
    password:string;
}