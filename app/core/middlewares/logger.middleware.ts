import { Injectable, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

    resolve(...args: any[]): ExpressMiddleware {
        return (req: Request, res: Response, next: NextFunction) => {
            console.log(`Request: ${req.url}`);
            next();
        };
    }
}
