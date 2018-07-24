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
            migrations: [`src/database/migrations/*.{ts,js}`],
            entities: ['**/*.entity.{ts,js}'],
        }),
    ],
})
export class DatabaseModule { }
