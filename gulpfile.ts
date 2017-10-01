/// <reference types="node" />
import * as fs from 'fs';
const gulp = require('gulp');
const g = require('gulp-load-plugins')();

function sourceLint() {
    return g.eslint();
}

function specLint() {
    return g.eslint({
        rules: {
            'jasmine/no-spec-dupes': 0,
            'lodash/import-scope': 0,
            'prefer-const': 0,
            'import/no-duplicates': 0,
            'import/max-dependencies': 0,
        }
    });
}

gulp.task('eslint', () => {
    return gulp.src('app/**/*.ts', { since: g.memoryCache.lastMtime('source') })
        .pipe(g.memoryCache('source'))
        .pipe(g.ignore.exclude('*.d.ts'))
        .pipe(g.if('*.spec.ts', specLint(), sourceLint()))
        .pipe(g.eslint.format());
});

gulp.task('eslint:w', (done) => {
    const w = gulp.watch('app/**/*.ts', { ignoreInitial: false }, gulp.series('eslint'));
    w.on('change', g.memoryCache.update('source'));
    process.on('SIGINT', () => {
        w.close();
        done();
    });
});
