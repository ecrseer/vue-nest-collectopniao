import { Module } from '@nestjs/common';
import { OpniaoService } from './opniao.service';
import { OpniaoController } from './opniao.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OpniaoSchema } from './schemas/opniao.schema';

@Module({
  imports:[MongooseModule.forFeature(
    [
    {name: 'Opniao',
   schema: OpniaoSchema}
  ])
],
  providers: [OpniaoService],
  controllers: [OpniaoController]
})
export class OpniaoModule {}
