import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { MongoExceptionBadRequest } from './shared/mongoerror.filter';
import { HttpNaoEncontrado } from './shared/notfound.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpNaoEncontrado(),new MongoExceptionBadRequest())

  const sconfig = new DocumentBuilder().setTitle('api de opnioes')
  .setDescription('coleta opnioes').setVersion('0.1').addTag('opniaos').build()
  const documentacao = SwaggerModule.createDocument(app,sconfig)
  SwaggerModule.setup('',app,documentacao)
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
