import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

    resolve(...args: any[]): MiddlewareFunction {
        return (req: Request, res: Response, next: NextFunction) => {
            console.log(`Request: ${req.url}`);
            next();
        };
    }
}
