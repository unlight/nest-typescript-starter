import { ExceptionFilter, Catch, HttpException, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost) {
        const status = exception.getStatus();
        const response: Response = host.switchToHttp().getResponse();
        response.status(status).json({
            statusCode: status,
            message: `It's a message from the exception filter`,
        });
    }
}
