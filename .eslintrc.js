const { rules: tslintRulesRecommended } = require('tslint/lib/configs/recommended');
const tslintRules = Object.assign({}, tslintRulesRecommended, {
    "member-access": false,
    "ordered-imports": false,
    "quotemark": false,
    "no-var-keyword": false,
    "object-literal-sort-keys": false,
    "no-console": false,
    "arrow-parens": false,
    "max-line-length": false,
    "object-literal-key-quotes": false,
    "no-shadowed-variable": false,
    "only-arrow-functions": false,
    "no-var-requires": false,
    "semicolon": false,
    "no-empty": false,
});

module.exports = {
    "root": true,
    "env": {
        "es6": true,
        "node": true
    },
    "parser": "typescript-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "plugins": [
        "unicorn",
        "typescript",
        "import",
        "tslint",
        "nestjs",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:unicorn/recommended",
        "plugin:nestjs/recommended",
    ],
    "rules": {
        "tslint/config": [1, {
            rules: tslintRules,
            rulesDirectory: ["node_modules/tslint/lib/rules"],
        }],
        "no-undef": 0,
        "no-unused-vars": 0,
        "no-console": 0,
        "indent": 0,
        "import/newline-after-import": 1,
        "import/no-duplicates": 1,
        "import/max-dependencies": [1, { "max": 10 }],
        "import/newline-after-import": 0,
        "quotes": [1, "single", { "allowTemplateLiterals": true }],
        "semi": ["warn", "always"],
    }
};
