import {IsNotEmpty, IsString,IsNumber} from 'class-validator';



export class CreatePersonaDto{
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsString()
    @IsNotEmpty()
    email: string;
    @IsNumber()
    @IsNotEmpty()
    age: number;
    @IsString()
    @IsNotEmpty()
    password:string;
}