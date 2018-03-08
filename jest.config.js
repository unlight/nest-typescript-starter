module.exports = {
    "transform": {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "collectCoverage": false,
    "coverageDirectory": ".testresults",
    "coverageReporters": [
        "lcov"
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
        "tsx",
        "js"
    ]
};
