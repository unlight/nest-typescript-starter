const config = {
    port: 3000,
    connectionType: process.env.TYPEORM_CONNECTION || 'sqlite',
    connectionDatabase: process.env.TYPEORM_DATABASE || ':memory:',
    databaseMigrations: 'app/database/migrations',
    secret: 'secret',
};

export = Object.freeze(config);
