module.exports = function(config) {
    config.set({
        files: [
            { pattern: 'app/**/*.graphql', included: false, mutated: false },
        ],
        testRunner: 'jest',
        mutator: 'typescript',
        transpilers: ['typescript'],
        reporter: ['html', 'clear-text', 'progress'],
        coverageAnalysis: 'off',
        tsconfigFile: 'tsconfig.json',
        jest: {
            project: 'default',
            config: require('./jest.config'),
        },
        mutate: [
            'app/**/cat.controller.ts',
        ],
        timeoutMs: 10 * 1000,
        // timeoutFactor: 2,
        htmlReporter: {
            baseDir: '.testresults/mutation'
        },
        // logLevel: 'debug',
    });
};
