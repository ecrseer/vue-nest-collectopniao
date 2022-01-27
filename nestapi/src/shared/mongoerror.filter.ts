import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, NotFoundException } from "@nestjs/common";
import {Response,Request} from 'express'
import { MongoError } from "mongodb";
//response sobrescreve o tipo response

@Catch(MongoError)
export class MongoExceptionBadRequest implements ExceptionFilter {
    
    catch(ex: MongoError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const resp = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = ex.code; 

        resp
            .status(HttpStatus.BAD_REQUEST)
            .json({
                mensagem:'Dados duplicados, nao é possivel cadastrar',
                msg:ex.message,
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
        //throw new HttpException("abcd",444);

    }
}