import { Module } from '@nestjs/common';
import { OpniaoService } from './opniao.service';
import { OpniaoController } from './opniao.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OpniaoSchema2 } from './schemas/opniao.schema';

@Module({
  imports:[MongooseModule.forFeature(
    [
    {name: 'Opniao',
   schema: OpniaoSchema2}
  ])
],
  providers: [OpniaoService],
  controllers: [OpniaoController]
})
export class OpniaoModule {}
