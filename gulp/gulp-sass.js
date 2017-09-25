const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const Path = require('./path');
const rename = require('gulp-rename');
const tildeImporter = require('node-sass-tilde-importer');

/**
 * @param {string} src
 * @param {string} outFile
 */
module.exports = (src, outFile) => {
    return gulp.src(src)
        .pipe(rename(outFile))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            importer: tildeImporter,
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest(Path.bundle()));
};
