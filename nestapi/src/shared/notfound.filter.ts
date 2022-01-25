import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import {Response} from 'express'
//response sobrescreve o tipo response


export class HttpNaoEncontrado implements ExceptionFilter {
    catch(ex: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const resp = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = ex.getStatus(); 

        resp
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
        //throw new HttpException("abcd",444);

    }
}