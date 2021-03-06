import { Module } from '@nestjs/common';
import { OpniaoService } from './opniao.mongo.service';
import { OpniaoController } from './opniao.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OpniaoSchemaSingleton,OpniaoSchema } from './schemas/opniao.schema';

@Module({
  imports:[MongooseModule.forFeature(
    [
    {name: OpniaoSchema.name,
   schema: OpniaoSchemaSingleton}
  ])
],
  providers: [OpniaoService],
  controllers: [OpniaoController]
})
export class OpniaoModule {}
