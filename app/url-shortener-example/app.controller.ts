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
        return 'unknown';
    }

    @Get('test')
    async test() {
        // debugger;
        const driver: MongoDriver = this.connection.driver as any;
        const repo = this.connection.getMongoRepository(Url);
        debugger;
        const url = Object.assign(new Url, { url: 'http://palanka.com' });
        const seq1 = await repo.save(url);
        // const seq2 = new Sequence();
        // seq2.entity = 'sequence';
        // await repo.save(seq2);
        // const result = await repo.findOneAndUpdate({}, { $inc: { id: 1 } });
    }
}
