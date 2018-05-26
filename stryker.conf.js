module.exports = function(config) {
    config.set({
        files: [
            'src/**/*.ts',
            'src/**/*.graphql',
        ],
        testRunner: 'jest',
        mutator: 'typescript',
        transpilers: [],
        reporter: ['html', 'clear-text', 'progress'],
        coverageAnalysis: 'off',
        tsconfigFile: 'tsconfig.json',
        mutate: [
            'src/**/cat.controller.ts',
        ],
        timeoutMs: 10 * 1000,
        // timeoutFactor: 2,
        htmlReporter: {
            baseDir: '.testresults/mutation'
        },
        // logLevel: 'trace'
    });
};
