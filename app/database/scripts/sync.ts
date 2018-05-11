import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';
import { IScript } from '../scripts';

@Injectable()
export class Sync implements IScript {

    constructor(
        private connection: Connection,
    ) { }

    async run() {
        await this.connection.synchronize();
        await this.connection.close();
    }
}

export default Sync;
