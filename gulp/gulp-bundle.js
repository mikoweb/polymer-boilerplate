const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const Path = require('./path');

/**
 * @param {Array} src
 * @param {string} fileName
 */
module.exports = (src, fileName) => {
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(concat(fileName))
        .pipe(gulp.dest(Path.bundle()))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest(Path.bundle()));
};
