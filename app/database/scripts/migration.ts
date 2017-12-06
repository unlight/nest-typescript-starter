import { Component, Inject } from '@nestjs/common';
import { Connection, QueryBuilder } from 'typeorm';
import { Name } from './name.decorator';
import { MigrationGenerateCommand } from 'typeorm/commands/MigrationGenerateCommand';
import { IScript } from '../scripts';
import { Arguments } from 'yargs';
import config = require('../../app.config');

@Component()
@Name('migration')
export class Migration implements IScript {

    constructor(
        @Inject('DatabaseConnection') private connection: Connection,
    ) { }

    async run(argv: Arguments) {
        const command = new MigrationGenerateCommand();
        const options = { ...argv, dir: config.databaseMigrations };
        // await command.handler(options);
    }
}
