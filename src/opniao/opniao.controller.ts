import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CriaOpniaoDTO } from './create-opniao.dto';
import { OpniaoService } from './opniao.service';

@Controller('opniao')
export class OpniaoController {

    constructor(private opniaoService:OpniaoService){}

    @Post("/criar")
    async addOpniao(@Res() res, 
    @Body() criaOpniaoDTO:CriaOpniaoDTO){
        const opniao = this.opniaoService.addOpniao(criaOpniaoDTO)
        return res.status(HttpStatus.OK).json({
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
