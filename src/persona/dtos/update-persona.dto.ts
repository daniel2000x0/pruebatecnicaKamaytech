import {IsNotEmpty, IsString,IsNumber} from 'class-validator';



export class UpdatePersonaDto{
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsString()
    @IsNotEmpty()
    email: string;
    @IsNumber()
    @IsNotEmpty()
    age: number;
    @IsNotEmpty()
    @IsString()
    password:string;
}