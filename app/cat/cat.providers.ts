import { Connection, Repository } from 'typeorm';
import { Cat } from './cat.entity';

export const catProviders = [
    {
        provide: 'CatRepository',
        useFactory: (connection: Connection) => connection.getRepository(Cat),
        inject: ['DatabaseConnection'],
    },
];
