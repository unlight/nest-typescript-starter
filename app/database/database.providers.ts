import { createConnection } from 'typeorm';
import { Cat } from '../cat/cat.entity';
import config = require('../app.config');

const databaseProviders = [
    {
        provide: 'DatabaseConnection',
        useFactory: async () => await createConnection({
            type: config.connection.type as any,
            host: config.connection.host,
            database: config.connection.database,
            synchronize: false,
            logging: true,
            migrations: [`${__dirname}/migrations/*.ts`],
            entities: [
                Cat,
            ],
        }),
    },
];

export { databaseProviders };
