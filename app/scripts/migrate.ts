import { Component, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Name } from './name.decorator';

@Component()
@Name('migrate')
export class Migrate {

    constructor(
        @Inject('DatabaseConnection') private connection: Connection,
    ) { }

    async run() {
        await this.connection.runMigrations();
    }
}
