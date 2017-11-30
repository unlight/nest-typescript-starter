const config = {
    port: 3000,
    connectionType: process.env.CONNECTION_TYPE || 'sqlite',
    connectionDatabase: process.env.CONNECTION_DATABASE || ':memory:',
};

export = Object.freeze(config);
