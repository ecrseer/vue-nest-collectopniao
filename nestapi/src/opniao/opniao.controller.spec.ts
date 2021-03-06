import { HttpStatus } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';



import { CriaOpniaoDTO, CriaOpniaoSchema } from './create-opniao.dto';
import { OpniaoController } from './opniao.controller';
import { OpniaoService } from './opniao.mongo.service';
import { OpniaoSchema, OpniaoSchemaSingleton } from './schemas/opniao.schema';
import { JoiValidationPipe } from './validation.pipe';

const idMockado = '61f01da7fdd02332259996d2'
const resolvedValueMock = [
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
describe('OpniaoController', () => {
  let controller: OpniaoController;
  let service: OpniaoService;

  beforeEach(async () => { 
    const providerMock = {
      provide: OpniaoService,
      useValue: {
        findAll: jest.fn().mockResolvedValue(resolvedValueMock),
        adicionaOpniao: jest.fn()
          .mockImplementation((criaOpniaoDTO: CriaOpniaoDTO) =>
            Promise.resolve({ _id: idMockado, ...criaOpniaoDTO }),
          )
      },
    } 
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpniaoController],
      providers: [providerMock],
    })
      .overridePipe(JoiValidationPipe).useValue(new JoiValidationPipe(CriaOpniaoSchema))
      .compile();

    service = module.get(OpniaoService);
    controller = module.get(OpniaoController);
  });

  it('deve estar definido', async () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined()
  });

  it('deve cadastrar opniao corretamente', async () => {
    const opniaoMock: CriaOpniaoDTO = {
      first_name: '',
      last_name: 'carlos',
      email: '',
      phone: '',
      address: '',
      description: '',
      satisfacao: 4,
      created_at: undefined
    }
    
    const responseFunctionsMock = {
      json(body?: any) { return body },
      status(code: number) {
        this.statusCode = code
        return this
      },
    }
    const responseMock = {
      message: "adicionei ok",
      opniao: {
        _id: idMockado,
        ...opniaoMock
      }
    }


    let promiseCriar = controller.addOpniao(responseFunctionsMock, opniaoMock);
    expect(promiseCriar).resolves.toEqual(responseMock)

  })
});
