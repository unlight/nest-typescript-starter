import { Component, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Cat } from '../cat/cat.entity';
import { Name } from './name.decorator';
import { IScript } from '../scripts';

@Component()
@Name('seed')
export class Seed implements IScript {

    constructor(
        @Inject('DatabaseConnection') private connection: Connection,
    ) { }

    async run() {
        await this.connection.synchronize(true);
        const catRepository = this.connection.getRepository(Cat);
        catRepository.insert([{ name: 'Fluffy', updatedDate: new Date(), birthDate: new Date() }]);
        await this.connection.close();
    }
}
