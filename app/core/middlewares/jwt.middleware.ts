import { Injectable, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import { ServerRequest } from 'http';
import { ConfigService } from '../../app.config.service';
const jwt = require('express-jwt');

@Injectable()
export class JwtMiddleware implements NestMiddleware {

    constructor(
        private config: ConfigService,
    ) { }

    resolve(...args: any[]): ExpressMiddleware {
        return jwt({ secret: this.config.get('secret') });
    }
}
