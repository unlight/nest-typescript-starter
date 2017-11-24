const config = {
    connectionType: process.env.CONNECTION_TYPE || 'sqlite',
    connectionDatabase: process.env.CONNECTION_DATABASE || ':memory:',
};

// config.connectionType = 'mongodb';
// config.connectionDatabase = 'nest-typescript-starter';

export = config;
