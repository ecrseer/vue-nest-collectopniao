import { Controller, Get, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpNaoEncontrado } from './shared/notfound.filter';

//@UseFilters(HttpNaoEncontrado)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
