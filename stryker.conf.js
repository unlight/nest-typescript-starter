module.exports = function(config) {
    config.set({
        mutate: [
            'src/**/*.{ts,tsx}',
            '!src/**/*.spec.{ts,tsx}',
            '!src/examples/**/*',
            '!src/**/testing/**/*',
        ],
        files: [
            'jest.config.js',
            'src/**/*.tsx',
            'src/**/*.ts',
            'src/**/*.json',
            'package.json',
            'tsconfig.json',
        ],
        mutator: 'typescript',
        packageManager: 'npm',
        reporters: ['progress', 'html'],
        testRunner: 'jest',
        transpilers: [],
        coverageAnalysis: 'off',
        tsconfigFile: 'tsconfig.json',
        htmlReporter: {
            baseDir: 'coverage/mutation',
        },
    });
};
