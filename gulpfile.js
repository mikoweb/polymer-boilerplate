const Path = require('./gulp/path');
const bundle = require('./gulp/gulp-bundle');
const webcomponents = require('./gulp/gulp-webcomponents');
const rollupBundle = require('./gulp/rollup-bundle');
const gulp = require('gulp');
const bundleUglify = require('./gulp/gulp-uglify');

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

gulp.task('dist', ['bundle-core', 'bundle-webcomponentsjs', 'dist-app']);
