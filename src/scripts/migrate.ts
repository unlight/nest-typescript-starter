import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';
import { IScript } from './scripts.module';

@Injectable()
export class Migrate implements IScript {

    constructor(
        private connection: Connection,
    ) { }

    async run() {
        await this.connection.runMigrations();
    }
}

export default Migrate;
