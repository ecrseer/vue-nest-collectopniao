import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, NotFoundException } from "@nestjs/common";
import {Response,Request} from 'express'
//response sobrescreve o tipo response

@Catch(NotFoundException)
export class HttpNaoEncontrado implements ExceptionFilter {
    
    catch(ex: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const resp = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = ex.getStatus(); 

        resp
            .status(status)
            .json({
                mensagem:'Caminho(URL) nao encontrado',
                msg:ex.message,
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
        //throw new HttpException("abcd",444);

    }
}