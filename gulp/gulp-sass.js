const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

/**
 * @param {string} src
 * @param {string} dest
 */
module.exports = (src, dest) => {
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest(dest));
};
