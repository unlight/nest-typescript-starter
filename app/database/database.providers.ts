import { createConnection } from 'typeorm';
import { Cat } from '../cat/cat.entity';

export const databaseProviders = [
    {
        provide: 'DatabaseConnection',
        useFactory: async () => await createConnection({
            type: 'mongodb',
            host: 'localhost',
            database: 'nest-typescript-starter',
            // synchronize: false,
            entities: [
                Cat,
            ],
        }),
    },
];
