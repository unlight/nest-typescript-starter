import { ExceptionFilter, Catch } from '@nestjs/common';
const UnauthorizedError = require('express-jwt/lib/errors/UnauthorizedError');

@Catch(UnauthorizedError)
export class UnauthorizedErrorFilter implements ExceptionFilter {

    catch(err: any, response) {
        const status = err.status;
        response.status(status).json({
            statusCode: status,
            message: err.message,
        });
    }
}
