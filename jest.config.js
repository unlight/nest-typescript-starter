module.exports = {
    rootDir: 'src',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coverageReporters: [
        // "lcov",
        'text',
    ],
    collectCoverageFrom: ['**/*.ts', '!**/*.spec.ts'],
    testMatch: ['<rootDir>/**/*.spec.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    // modulePathIgnorePatterns: ['<rootDir>/dist'],
    globals: {
        'ts-jest': {
            diagnostics: false,
            isolatedModules: true,
            tsConfig: {
                target: 'esnext',
            },
        },
    },
};
