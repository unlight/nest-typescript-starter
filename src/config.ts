import * as convict from 'convict';

const schema = {
    environment: {
        doc: 'The applicaton environment',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
        arg: 'node_env',
    },
    program: {
        doc: 'The program which runs code',
        format: ['node', 'tsnode', 'webpack'],
        default: 'node',
        env: 'PROGRAM',
        arg: 'program',
    },
    port: {
        format: 'port',
        default: 3000,
        env: 'PORT',
        arg: 'port',
    },
    secretOrPrivateKey: {
        default: 'secret',
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
        },
        entities: {
            default: ['src/app/**/*.entity.{ts,js}'],
        },
    },
};

export const config = convict(schema).validate();

// export type Config = Record<keyof typeof schema, any>;
export type Config = typeof config;

if (config.get('program') === 'webpack') {
    const entityContext = require.context('.', true, /\.entity\.ts$/);
    config.set('typeorm.entities', entityContext.keys().map(id => {
        const entityModule = entityContext(id);
        const [entity] = Object.values(entityModule);
        return entity;
    }));
}
