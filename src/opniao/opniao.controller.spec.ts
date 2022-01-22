import { Test, TestingModule } from '@nestjs/testing';
import { OpniaoController } from './opniao.controller';

describe('OpniaoController', () => {
  let controller: OpniaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpniaoController],
    }).compile();

    controller = module.get<OpniaoController>(OpniaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
