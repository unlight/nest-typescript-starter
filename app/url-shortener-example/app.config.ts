import * as convict from 'convict';

const schema: convict.Schema<any> = {
    environment: {
        doc: 'The applicaton environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    port: {
        format: 'port',
        default: 3000,
        arg: 'port',
    },
    typeorm: {
        type: {
            default: 'mongodb',
        },
        host: {
            default: 'localhost',
        },
        database: {
            default: 'url-shortener',
            arg: 'typeorm_database',
        },
        synchronize: {
            default: false,
            format: Boolean,
        },
        logging: {
            default: true,
            format: Boolean,
        },
        migrations: {
            default: [`app/database/migrations/*.ts`],
        },
    },
    secret: {
        default: 'secret',
    },
};

export const config = convict(schema).validate();

export type Config = Record<keyof typeof schema, any>;
