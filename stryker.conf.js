module.exports = function(config) {
    config.set({
        maxConcurrentTestRunners: 2,
        files: [
            'src/**/*.ts',
            'src/**/*.graphql',
            'package.json',
        ],
        testRunner: 'command',
        commandRunner: { command: 'npm run test:r' },
        mutator: 'typescript',
        transpilers: [],
        reporters: ['html', 'clear-text', 'progress'],
        packageManager: 'npm',
        coverageAnalysis: 'off',
        tsconfigFile: 'tsconfig.json',
        mutate: [
            'src/**/cat.controller.ts',
        ],
        timeoutMS: 10 * 1000,
        // timeoutFactor: 2,
        htmlReporter: {
            baseDir: '~testresults/mutation'
        },
        // logLevel: 'trace'
    });
};
