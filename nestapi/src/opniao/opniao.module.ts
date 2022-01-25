import { Module } from '@nestjs/common';
import { OpniaoService } from './opniao.mongo.service';
import { OpniaoController } from './opniao.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OpniaoSchema2,OpniaoSche } from './schemas/opniao.schema';

@Module({
  imports:[MongooseModule.forFeature(
    [
    {name: OpniaoSche.name,
   schema: OpniaoSchema2}
  ])
],
  providers: [OpniaoService],
  controllers: [OpniaoController]
})
export class OpniaoModule {}
