module.exports = {
    rootDir: 'src',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    collectCoverage: false,
    coverageDirectory: '<rootDir>/../coverage',
    coverageReporters: ['lcov', 'text'],
    collectCoverageFrom: ['**/*.ts', '!**/*.spec.ts'],
    testRegex: ['\\.spec\\.[jt]sx?$'],
    // testMatch: ['<rootDir>/src/**/*.spec.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    // modulePathIgnorePatterns: ['<rootDir>/dist'],
    globals: {
        'ts-jest': {
            diagnostics: false,
            isolatedModules: true,
        },
    },
};
