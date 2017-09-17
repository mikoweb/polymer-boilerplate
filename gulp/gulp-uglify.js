const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

/**
 * @param {string} src
 * @param {string} dest
 */
module.exports = (src, dest) => {
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest(dest));
};
