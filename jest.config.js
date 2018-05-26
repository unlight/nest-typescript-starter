module.exports = {
    'testEnvironment': 'node',
    'transform': {
        '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
    },
    'collectCoverage': false,
    'coverageDirectory': '.testresults',
    'coverageReporters': [
        'lcov',
        'text',
    ],
    'collectCoverageFrom': [
        'src/**/*.ts',
        '!src/**/*.spec.ts',
        '!src/**/*.ispec.ts'
    ],
    'testMatch': [
        '<rootDir>/src/**/*.spec.ts'
    ],
    'moduleFileExtensions': [
        'ts',
        'js'
    ]
};
