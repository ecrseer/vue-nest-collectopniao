import { Body, Controller, Get, HttpStatus, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { JoiValidationPipe } from 'src/shared/validation.pipe';
import { CriaOpniaoDTO, CriaOpniaoSchema } from './create-opniao.dto';
import { OpniaoValidationPipe } from './opniao.pipe';
import { OpniaoService } from './opniao.service'; 
import { OpniaoSche } from './schemas/opniao.schema';

@Controller('opniao')
export class OpniaoController {

    constructor(private opniaoService:OpniaoService){}

    @Post("/criar")
    @UsePipes(new JoiValidationPipe(CriaOpniaoSchema))
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
