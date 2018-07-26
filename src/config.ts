import * as convict from 'convict';

const schema = {
    environment: {
        doc: 'The applicaton environment',
        format: ['production', 'development', 'test', 'webpack_development'],
        default: 'development',
        env: 'NODE_ENV',
        arg: 'node_env'
    },
    port: {
        format: 'port',
        default: 3000,
        env: 'PORT',
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
        },
        entities: {
            default: ['src/app/**/*.entity.{ts,js}'],
        },
    },
    secretOrPrivateKey: {
        default: 'secret',
    },
};

export const config = convict(schema).validate();

// export type Config = Record<keyof typeof schema, any>;
export type Config = typeof config;

if (config.get('environment') === 'webpack_development') {
    const entityContext = require.context('.', true, /\.entity\.ts$/);
    config.set('typeorm.entities', entityContext.keys().map(id => {
        const entityModule = entityContext(id);
        const [entity] = Object.values(entityModule);
        return entity;
    }));
}
