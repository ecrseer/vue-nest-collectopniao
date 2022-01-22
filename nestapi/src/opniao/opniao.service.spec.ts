import { Test, TestingModule } from '@nestjs/testing';
import { OpniaoService } from './opniao.service';

describe('OpniaoService', () => {
  let service: OpniaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpniaoService],
    }).compile();

    service = module.get<OpniaoService>(OpniaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
