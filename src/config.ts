import * as convict from 'convict';

const schema: convict.Schema<any> = {
    environment: {
        doc: 'The applicaton environment',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    runner: {
        doc: 'The application runner',
        format: ['node', 'webpack'],
        arg: 'runner',
        default: process.env.NODE_RUNNER || 'node',
    },
    port: {
        format: 'port',
        default: 3000,
        arg: 'port',
    },
    typeorm: {
        type: {
            default: 'sqlite',
            env: 'TYPEORM_CONNECTION',
            arg: 'typeorm_connection',
        },
        host: {
            default: 'localhost',
        },
        database: {
            default: ':memory:',
            env: 'TYPEORM_DATABASE',
            arg: 'typeorm_database',
        },
        synchronize: {
            default: false,
            format: Boolean,
        },
        logging: {
            default: true,
            format: Boolean,
        }
    },
    secret: {
        default: 'secret',
    },
};

export const config = convict(schema).validate();

export type Config = Record<keyof typeof schema, any>;
