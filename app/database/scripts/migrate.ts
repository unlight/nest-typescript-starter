import { Component, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';
import { IScript } from '../scripts';

@Component()
export class Migrate implements IScript {

    constructor(
        private connection: Connection,
    ) { }

    async run() {
        await this.connection.runMigrations();
    }
}

export default Migrate;
