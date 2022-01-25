import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriaOpniaoDTO } from './create-opniao.dto';
import { Opniao } from './opniao.interface'; 
import { OpniaoSche } from './schemas/opniao.schema';

@Injectable()
export class OpniaoService {
    constructor(@InjectModel(OpniaoSche.name) 
    private readonly opnioesModelo:Model<Opniao>){

    }
async getAllOpnioes():Promise<Opniao[]>{
    return await this.opnioesModelo.find().exec();
}
async adicionaOpniao(criaOpniao:CriaOpniaoDTO):Promise<Opniao>{
    const opniao = await new this.opnioesModelo(criaOpniao);    
    return opniao.save();
}

}
