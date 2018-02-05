const config = {
    port: 3000,
    typeorm: {
        type: (process.env.TYPEORM_CONNECTION || 'sqlite') as any,
        host: 'localhost',
        database: process.env.TYPEORM_DATABASE || ':memory:',
        synchronize: false,
        logging: true,
    },
    databaseMigrations: 'app/database/migrations',
    secret: 'secret',
};

export = Object.freeze(config);
