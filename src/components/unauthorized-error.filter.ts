import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
const UnauthorizedError = require('express-jwt/lib/errors/UnauthorizedError');

@Catch(UnauthorizedError)
export class UnauthorizedErrorFilter implements ExceptionFilter<any> {

    catch(exception: any, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        const { status } = exception;
        response.status(status).json({
            statusCode: status,
            message: exception.message,
        });
    }
}
