import { Component, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Cat } from '../cat/cat.entity';
import { Name } from './name.decorator';

@Component()
@Name('seed')
export class Seed {

    constructor(
        @Inject('DatabaseConnection') private connection: Connection,
    ) { }

    async run() {
        await this.connection.synchronize(true);
        const catRepository = this.connection.getRepository(Cat);
        catRepository.insert([{ name: 'Fluffy' }]);
    }
}
