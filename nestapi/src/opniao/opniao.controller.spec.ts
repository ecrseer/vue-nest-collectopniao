import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CriaOpniaoDTO } from './create-opniao.dto';
import { OpniaoController } from './opniao.controller';
import { OpniaoService } from './opniao.mongo.service';
import { OpniaoSche, OpniaoSchema2 } from './schemas/opniao.schema';

const resolvedValue = [
  {
    "_id": "61ef5bda02fe75fc6ba590eb",
    "satisfacao": 4,
    "description": "string",
    "address": "string",
    "phone": " string",
    "email": " string",
    "last_name": " string",
    "first_name": "a ",
    "created_at": "2022-01-25T02:09:30.563Z",
    "__v": 0
  },
  {
    "_id": "61f01da7fdd02332259996d8",
    "satisfacao": 4,
    "description": "string",
    "address": "string",
    "phone": " string",
    "email": " string",
    "last_name": " string",
    "first_name": "a ",
    "created_at": "2022-01-25T15:56:23.845Z",
    "__v": 0
  }

]
const providing = {
  provide: OpniaoService,
  useValue: {
    findAll: jest.fn().mockResolvedValue(resolvedValue),
    create: jest
      .fn()
      .mockImplementation((criaOpniaoDTO: CriaOpniaoDTO) =>
        Promise.resolve({ _id: '31', ...criaOpniaoDTO }),
      ),
  },
}
describe('OpniaoController', () => {
  let controller: OpniaoController;
  let service: OpniaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpniaoController],
      providers: [
        providing],
    }).compile();
    
    service = module.get<OpniaoService>(OpniaoService);
    controller = module.get<OpniaoController>(OpniaoController);
  });

  it('deve estar definido', async () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined()
  });

  it('deve criar',async()=>{
    
  })
});
