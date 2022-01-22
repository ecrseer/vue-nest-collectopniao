import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { OpniaoModule } from './opniao/opniao.module';

@Module({
  imports: [    
    MongooseModule.forRoot('mongodb+srv://apiuser:pipipipopopo@myycluster0.ksacz.mongodb.net/nestvuestart?retryWrites=true&w=majority', 
    { useNewUrlParser: true }),  OpniaoModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
