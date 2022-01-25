import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpNaoEncontrado } from './shared/notfound.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpNaoEncontrado())
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
