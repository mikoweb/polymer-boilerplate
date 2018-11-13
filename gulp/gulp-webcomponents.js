const gulp = require('gulp');
const uglify = require('gulp-uglify');
const Path = require('./path');

module.exports = () => {
    return Promise.all([
        new Promise(function(resolve, reject) {
            gulp
                .src([
                    Path.nodeModules('/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'),
                    Path.nodeModules('/@polymer/esm-amd-loader/lib/esm-amd-loader.min.js')
                ])
                .pipe(gulp.dest(Path.bundle('/polyfills')))
                .on('error', reject)
                .on('end', resolve)
            ;

        }),
        new Promise(function(resolve, reject) {
            gulp
                .src([
                    Path.nodeModules('/@webcomponents/webcomponentsjs/webcomponents-loader.js'),
                    Path.nodeModules('/@webcomponents/webcomponentsjs/webcomponents-bundle.js'),
                ])
                .pipe(uglify())
                .pipe(gulp.dest(Path.bundle('/polyfills')))
                .on('error', reject)
                .on('end', resolve)
            ;
        }),
        new Promise(function(resolve, reject) {
            gulp
                .src([
                    Path.nodeModules('/@webcomponents/webcomponentsjs/bundles/*.js'),
                ])
                .pipe(uglify())
                .pipe(gulp.dest(Path.bundle('/polyfills/bundles')))
                .on('error', reject)
                .on('end', resolve)
            ;
        })
    ]);
};
