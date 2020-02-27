module.exports = {
    include: ['src/**/*.ts', 'src/**/*.tsx'],
    exclude: ['**/*.d.ts', 'src/**/*.spec.ts'],
    extension: ['.ts', '.tsx'],
    require: ['ts-node/register/transpile-only'],
    reporter: ['text'],
    sourceMap: true,
    instrument: true,
    tempDirectory: '.node_modules/.nyc_output',
};
