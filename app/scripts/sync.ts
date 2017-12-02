import { Component, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Name } from './name.decorator';

@Component()
@Name('sync')
export class Sync {

    constructor(
        @Inject('DatabaseConnection') private connection: Connection,
    ) { }

    async run() {
        await this.connection.synchronize();
    }
}
