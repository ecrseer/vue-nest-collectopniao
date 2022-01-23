import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; 
import { Opniao } from '../opniao.interface';

 

export type OpniaoDocument = Opniao & Document

@Schema()
export class OpniaoSche {
    @Prop()
    first_name: string;
    @Prop()
    last_name: string;
    @Prop()
    email: string;

    @Prop()
    phone: string;
    @Prop()
    address: string;
    @Prop()
    description: string;
    @Prop()
    satisfacao: number;
    @Prop({ type: Date, default: Date.now })
    created_at: Date;
}
export const OpniaoSchema2 = SchemaFactory.createForClass(OpniaoSche);
