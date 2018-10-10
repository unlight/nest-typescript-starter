module.exports = function(config) {
    config.set({
        maxConcurrentTestRunners: 2,
        files: [
            'src/**/*.ts',
            'src/**/*.graphql',
            'package.json',
        ],
        testRunner: 'mocha',
        mutator: 'typescript',
        transpilers: [],
        reporters: ['html', 'clear-text', 'progress'],
        testFramework: 'mocha',
        mochaOptions: {
            files: [ 'src/**/*.spec.ts' ],
            // opts: 'path/to/mocha.opts',
            // ui: 'bdd',
            timeout: 8000,
            require: ['ts-node/register/transpile-only', 'tsconfig-paths/register'],
            asyncOnly: false,
        },
        packageManager: 'npm',
        coverageAnalysis: 'off',
        tsconfigFile: 'tsconfig.json',
        mutate: [
            'src/**/cat.controller.ts',
        ],
        timeoutMS: 10 * 1000,
        // timeoutFactor: 2,
        htmlReporter: {
            baseDir: '.testresults/mutation'
        },
        // logLevel: 'trace'
    });
};
