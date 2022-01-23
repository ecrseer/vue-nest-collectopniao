import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { LoggerMiddleware } from './logger.middleware';
import { OpniaoController } from './opniao/opniao.controller';
import { OpniaoModule } from './opniao/opniao.module';

@Module({
  imports: [    
    MongooseModule.forRoot('mongodb+srv://apiuser:pipipipopopo@myycluster0.ksacz.mongodb.net/nestvuestart?retryWrites=true&w=majority', 
    { useNewUrlParser: true }),  OpniaoModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(OpniaoController)
    //throw new Error('Method not implemented.');
  }
}
