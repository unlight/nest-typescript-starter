import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from '../cat/cat.entity';
import { config } from '../app.config';

@Module({
    imports: [
        // provides: typeorm/Connection, typeorm/EntityManager
        TypeOrmModule.forRoot({
            keepConnectionAlive: true,
            ...config.get('typeorm'),
            entities: [
                Cat,
            ],
        }),
    ],
})
export class DatabaseModule { }
