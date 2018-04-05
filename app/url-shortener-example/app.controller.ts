import { Get, Controller } from '@nestjs/common';
import { Connection, getConnection } from 'typeorm';
import { Sequence } from './sequence/sequence.entity';
import { MongoDriver } from 'typeorm/browser/driver/mongodb/MongoDriver';
import { Url } from './url/url.entity';

@Controller()
export class AppController {

    constructor(
        private connection: Connection,
    ) { }

    @Get('health')
    health() {
        return {'unknown': 1};
    }
}
