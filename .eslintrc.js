const tslintConfigRulesDirectory = [
    'node_modules/tslint/lib/rules',
    // 'node_modules/tslint-clean-code/dist/src',
];
const tslintConfigRules = Object.assign({},
    require('tslint/lib/configs/recommended').rules,
    // require('tslint-clean-code/recommended_ruleset').rules,
    {
        'member-access': false,
        'member-ordering': false,
        'ordered-imports': false,
        'quotemark': false,
        'no-var-keyword': false,
        'object-literal-sort-keys': false,
        'no-console': false,
        'arrow-parens': false,
        'max-line-length': false,
        'object-literal-key-quotes': false,
        'no-shadowed-variable': false,
        'only-arrow-functions': false,
        'no-var-requires': false,
        'semicolon': false,
        'interface-over-type-literal': false,
        'align': false,
        'trailing-comma': false,
        'typedef': false,
        'newline-before-return': false,
        'no-require-imports': false,
        // Wait new eslint-plugin-tslint
        // 'no-unused-variable': false,
        // 'restrict-plus-operands': true
    });

module.exports = {
    'root': true,
    'env': {
        'es6': true,
        'node': true,
        'jest/globals': true,
    },
    'parser': 'typescript-eslint-parser',
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module'
    },
    'plugins': [
        'unicorn',
        'typescript',
        'import',
        'tslint',
        'nestjs',
        'jest',
        // 'tsc',
    ],
    'extends': [
        'eslint:recommended',
        'plugin:unicorn/recommended',
        'plugin:nestjs/recommended',
        'plugin:jest/recommended',
    ],
    'rules': {
        'tslint/config': [1, {
            rules: tslintConfigRules,
            rulesDirectory: tslintConfigRulesDirectory,
            // configFile: `${__dirname}/tsconfig.json`,
        }],
        // 'tsc/config': [1, {
        //     configFile: `${__dirname}/tsconfig.json`,
        //     compilerOptions: {
        //         strictNullChecks: true,
        //     }
        // }],
        'no-undef': 0,
        'no-unused-vars': 0,
        'no-dupe-class-members': 0,
        'no-console': 0,
        'no-debugger': 1,
        'indent': 0,
        'quotes': [1, 'single', { 'allowTemplateLiterals': true }],
        'semi': [1, 'always'],
        'import/no-duplicates': 1,
        'import/max-dependencies': [1, { 'max': 12 }],
        'import/newline-after-import': 0,
    }
};
