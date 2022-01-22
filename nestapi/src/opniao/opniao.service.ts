import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriaOpniaoDTO } from './create-opniao.dto';
import { Opniao } from './opniao.interface';

@Injectable()
export class OpniaoService {
    constructor(@InjectModel('Opniao') 
    private readonly opnioesModelo:Model<Opniao>){

    }
async getAllOpnioes():Promise<Opniao[]>{
    return await this.opnioesModelo.find().exec();
}
async addOpniao(criaOpniao:CriaOpniaoDTO):Promise<Opniao>{
    const opniao = await new this.opnioesModelo(criaOpniao);
    return opniao.save();
}

}
