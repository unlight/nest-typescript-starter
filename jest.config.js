module.exports = {
    "testMatch": [
      "<rootDir>/app/**/*.spec.ts",
    ],
    "transform": {
      "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    },
    "collectCoverage": false,
    "coverageDirectory": ".testresults",
    "coverageReporters": [
      "lcov",
      "text-summary",
    ],
    "collectCoverageFrom": [
      "app/**/*.ts",
      "!app/**/*.spec.ts",
      "!app/**/*.ispec.ts",
    ],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
    ]
};
