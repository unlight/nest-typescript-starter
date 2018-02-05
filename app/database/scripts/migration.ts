import { Component, Inject } from '@nestjs/common';
import { Connection, QueryBuilder } from 'typeorm';
import { MigrationGenerateCommand } from 'typeorm/commands/MigrationGenerateCommand';
import { IScript } from '../scripts';
import { Arguments } from 'yargs';

@Component()
export class Migration implements IScript {

    constructor(
        private connection: Connection,
    ) { }

    async run(argv: Arguments) {
        const command = new MigrationGenerateCommand();
        // const options = { ...argv, dir: config.databaseMigrations };
        // await command.handler(options);
    }
}

export default Migration;
