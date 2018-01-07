import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from '../cat/cat.entity';
import config = require('../app.config');

@Module({
    imports: [
        // components: typeorm/Connection, typeorm/EntityManager
        TypeOrmModule.forRoot({
            ...config.store,
            entities: [
                Cat,
            ],
        }),
    ],
})
export class DatabaseModule { }
