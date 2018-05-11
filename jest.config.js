module.exports = {
    "testEnvironment": "node",
    "transform": {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "collectCoverage": false,
    "coverageDirectory": ".testresults",
    "coverageReporters": [
        "lcov",
        "text",
    ],
    "collectCoverageFrom": [
        "app/**/*.ts",
        "!app/**/*.spec.ts",
        "!app/**/*.ispec.ts"
    ],
    "testMatch": [
        "<rootDir>/app/**/*.spec.ts"
    ],
    "moduleFileExtensions": [
        "ts",
        "js"
    ]
};
