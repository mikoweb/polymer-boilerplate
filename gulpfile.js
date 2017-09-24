const Path = require('./gulp/path');
const bundle = require('./gulp/gulp-bundle');
const webcomponents = require('./gulp/gulp-webcomponents');
const rollupBundle = require('./gulp/rollup-bundle');
const gulp = require('gulp');
const bundleUglify = require('./gulp/gulp-uglify');
const bundleSass = require('./gulp/gulp-sass');
const stylemod = require('gulp-style-modules');
const sass = require('gulp-sass');

gulp.task('bundle-core', () => {
    return bundle([
        Path.lib('/babel-helpers.js'),
        Path.lib('/jquery/jquery.js'),
        Path.nodeModules('/underscore/underscore.js'),
        Path.nodeModules('/backbone/backbone.js'),
        Path.lib('/marionette/backbone.marionette.js'),
        Path.bowerComponents('/wc-ready/index.js'),
        Path.bowerComponents('/polymer-backbone/src/model/polymer-model.js'),
    ], 'core.js');
});

gulp.task('bundle-webcomponentsjs', () => {
    return webcomponents();
});

gulp.task('build-app', () => {
    return rollupBundle('./src/app/index.js', 'app.js', {
        externalHelpers: true,
        exclude: ['node_modules/**', 'bower_components/**'],
    });
});

gulp.task('dist-app', ['build-app'], () => {
    return bundleUglify(Path.bundle('/app.js'), Path.bundle());
});

gulp.task('sass', () => {
    return bundleSass(Path.style('/index.scss'), 'style.css');
});

gulp.task('modularize-styles', () => {
    gulp.src('./src/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
        }).on('error', sass.logError))
        .pipe(stylemod())
        .pipe(gulp.dest("./src"));
});

gulp.task('dist', ['bundle-core', 'bundle-webcomponentsjs', 'dist-app', 'sass', 'modularize-styles']);
