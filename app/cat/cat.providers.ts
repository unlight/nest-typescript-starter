import { Connection } from 'typeorm';
import { Cat } from './cat.entity';

const catProviders = [
    {
        provide: 'CatRepository',
        useFactory: (connection: Connection) => connection.getRepository(Cat),
        inject: ['DatabaseConnection'],
    },
];

export { catProviders };
