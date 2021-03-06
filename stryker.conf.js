module.exports = function(config) {
    config.set({
        mutate: [
            'src/**/*.{ts,tsx}',
            '!src/**/*.spec.{ts,tsx}',
            '!src/**/*.module.ts',
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
        reporters: ['progress', 'html', 'clear-text'],
        testRunner: 'jest',
        transpilers: [],
        coverageAnalysis: 'off',
        tsconfigFile: 'tsconfig.json',
        tempDirName: 'stryker-tmp',
        htmlReporter: {
            baseDir: 'coverage/mutation',
        },
    });
};
