const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const Path = require('./path');

module.exports = () => {
    gulp.src([Path.bowerComponents('/webcomponentsjs/custom-elements-es5-adapter.js')])
        .pipe(gulp.dest(Path.bundle('/polyfills')));

    return gulp
        .src([
            Path.bowerComponents('/webcomponentsjs/webcomponents-hi.js'),
            Path.bowerComponents('/webcomponentsjs/webcomponents-hi-ce.js'),
            Path.bowerComponents('/webcomponentsjs/webcomponents-hi-sd-ce.js'),
            Path.bowerComponents('/webcomponentsjs/webcomponents-lite.js'),
            Path.bowerComponents('/webcomponentsjs/webcomponents-loader.js'),
            Path.bowerComponents('/webcomponentsjs/webcomponents-sd-ce.js'),
        ])
        .pipe(uglify())
        .pipe(gulp.dest(Path.bundle('/polyfills')));
};
