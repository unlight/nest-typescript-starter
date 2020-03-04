module.exports = {
    rootDir: 'src',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    collectCoverage: false,
    coverageDirectory: '<rootDir>/../coverage',
    coverageReporters: ['lcov', 'text'],
    collectCoverageFrom: ['**/*.ts', '!**/*.spec.ts', '!**/*.module.ts'],
    testRegex: ['(\\.|/)(test|spec)\\.[jt]sx?$'],
    // testMatch: ['<rootDir>/src/**/*.spec.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    // modulePathIgnorePatterns: ['<rootDir>/dist'],
    moduleNameMapper: {
        '@generated/(.*)': '<rootDir>/../@generated/$1',
        '~components/(.*)': '<rootDir>/~components/$1',
    },
    globals: {
        'ts-jest': {
            diagnostics: false,
            isolatedModules: true,
        },
    },
};
