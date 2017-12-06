import { Component, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Name } from './name.decorator';
import { IScript } from '../scripts';

@Component()
@Name('sync')
export class Sync implements IScript {

    constructor(
        @Inject('DatabaseConnection') private connection: Connection,
    ) { }

    async run() {
        await this.connection.synchronize();
        await this.connection.close();
    }
}
