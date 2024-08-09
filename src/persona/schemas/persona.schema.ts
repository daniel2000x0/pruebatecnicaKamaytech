import{Schema,Prop,SchemaFactory} from '@nestjs/mongoose';
@Schema()
export class Persona{
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    age: number;
    @Prop()
    password:string;
}

export  const PersonaSchema = SchemaFactory.createForClass(Persona);