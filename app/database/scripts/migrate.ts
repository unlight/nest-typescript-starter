import { Component, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Name } from './name.decorator';
import { IScript } from '../scripts';

@Component()
@Name('migrate')
export class Migrate implements IScript {

    constructor(
        private connection: Connection,
    ) { }

    async run() {
        await this.connection.runMigrations();
    }
}
