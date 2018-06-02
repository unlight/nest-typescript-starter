import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from '../cat/cat.entity';
import { config } from '../app.config';
import { entityList } from '../entity.context';

@Module({
    imports: [
        // provides: typeorm/Connection, typeorm/EntityManager
        TypeOrmModule.forRoot({
            keepConnectionAlive: true,
            ...config.get('typeorm'),
            entities: [
                ...entityList(),
            ],
        }),
    ],
})
export class DatabaseModule { }
