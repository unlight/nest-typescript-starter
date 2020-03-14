module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testEnvironment: 'node',
    testRegex: '.e2e-spec.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    moduleNameMapper: {
        '@generated/(.*)': '<rootDir>/../@generated/$1',
        '~components/(.*)': '<rootDir>/../src/components/$1',
        '~app_modules/(.*)': '<rootDir>/../src/app_modules/$1',
    },
};
