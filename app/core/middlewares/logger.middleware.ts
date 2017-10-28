import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import { ServerRequest } from 'http';

@Middleware()
export class LoggerMiddleware implements NestMiddleware {

    resolve(...args: any[]): ExpressMiddleware {
        return (req: ServerRequest, res, next) => {
            console.log(`Request: ${req.url}`);
            next();
        };
    }
}
