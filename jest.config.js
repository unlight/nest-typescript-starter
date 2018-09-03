module.exports = {
    'testEnvironment': 'node',
    'transform': {
        '^.+\\.tsx?$': 'ts-jest'
    },
    'collectCoverage': false,
    'coverageDirectory': '~testresults',
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
