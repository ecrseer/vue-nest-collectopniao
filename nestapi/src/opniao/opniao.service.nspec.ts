import { Test, TestingModule } from '@nestjs/testing';
import { OpniaoController } from './opniao.controller';
import { OpniaoService } from './opniao.mongo.service';

describe('OpniaoService', () => {

  let controller: OpniaoController;
  let service: OpniaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpniaoService],
      controllers: [OpniaoController],
    }).compile();

    controller = module.get<OpniaoController>(OpniaoController);
    service = module.get<OpniaoService>(OpniaoService);
  });

  it('should be defineds', async () => {
    //expect(service).toBeDefined();

  });
});
