import { Body, Controller, Get, HttpStatus, Post, Res, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { HttpNaoEncontrado } from 'src/shared/notfound.filter'; 



import { CriaOpniaoDTO, CriaOpniaoSchema } from './create-opniao.dto'; 
import { OpniaoService } from './opniao.mongo.service'; 
import { OpniaoSchema } from './schemas/opniao.schema';
import { JoiValidationPipe } from './validation.pipe';

//@UseFilters(HttpNaoEncontrado)
@Controller('opniao')
export class OpniaoController {

    constructor(private opniaoService:OpniaoService){}

    @Post("/criar")
    @UsePipes(new JoiValidationPipe(CriaOpniaoSchema))
    //@UsePipes(new ValidationPipe())
    async addOpniao(@Res() res, 
    @Body() criaOpniaoDTO:CriaOpniaoDTO){
        const opniao = await this.opniaoService.adicionaOpniao(criaOpniaoDTO)
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

}
