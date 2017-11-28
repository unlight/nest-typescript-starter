import { Component, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';

@Component()
export class Seed {

    constructor(
        @Inject('DatabaseConnection') private connection: Connection,
    ) { }

    async run() {
        await this.connection.synchronize(true);
    }
}
