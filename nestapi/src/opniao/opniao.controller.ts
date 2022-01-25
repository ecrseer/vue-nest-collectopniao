import { Body, Controller, Get, HttpStatus, Post, Res, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { HttpNaoEncontrado } from 'src/shared/notfound.filter';
//import { JoiValidationPipe } from 'src/opniao/shared/validation.pipe';

import { CriaOpniaoDTO, CriaOpniaoSchema } from './create-opniao.dto'; 
import { OpniaoService } from './opniao.mongo.service'; 
import { OpniaoSche } from './schemas/opniao.schema';

@Controller('opniao')
export class OpniaoController {

    constructor(private opniaoService:OpniaoService){}

    @Post("/criar")
    //@UseFilters(new HttpNaoEncontrado())
    //@UsePipes(new JoiValidationPipe(CriaOpniaoSchema))
    //@UsePipes(new ValidationPipe())
    async addOpniao(@Res() res, 
    @Body() criaOpniaoDTO:CriaOpniaoDTO){
        const opniao = await this.opniaoService.addOpniao(criaOpniaoDTO)
        return await res.status(HttpStatus.OK).json({
            message:'adicionei ok',
            opniao
        })
     }
     @Get('opnioes')
     async getAllOpniao(@Res() res){
         const opnioes = await this.opniaoService.getAllOpnioes()
         return res.status(HttpStatus.OK).json(opnioes)
     }
     @Get('dilicia')
     async testagem(){
         //return OpniaoSchema.first_name

     }

}
