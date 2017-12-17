const Path = require('./gulp/path');
const bundle = require('./gulp/gulp-bundle');
const webcomponents = require('./gulp/gulp-webcomponents');
const rollupBundle = require('./gulp/rollup-bundle');
const gulp = require('gulp');
const bundleUglify = require('./gulp/gulp-uglify');
const bundleSass = require('./gulp/gulp-sass');
const stylemod = require('gulp-style-modules');
const sass = require('gulp-sass');
const run = require('gulp-run');
const concat = require('gulp-concat');

gulp.task('bundle-core', () => {
    return bundle([
        Path.lib('/babel-helpers.js'),
        Path.nodeModules('/axios/dist/axios.js'),
        Path.nodeModules('/objectmodel/dist/object-model.umd.js'),
        Path.nodeModules('/model-persistence/bundle/model-persistence.js'),
        Path.bowerComponents('/wc-ready/index.js'),
    ], 'core.js');
});

gulp.task('bundle-core-with-es5-adapter', ['bundle-core'], () => {
    return gulp.src([
        Path.bowerComponents('/webcomponentsjs/custom-elements-es5-adapter.js'),
        Path.bundle('/core.min.js'),
    ]).pipe(concat('core.min.js')).pipe(gulp.dest(Path.bundle()));
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
    return gulp.src('./src/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
        }).on('error', sass.logError))
        .pipe(stylemod())
        .pipe(gulp.dest("./src"));
});

gulp.task('polymer-build', ['modularize-styles'], () => {
    return run('npm run polymer-build').exec();
});

gulp.task('dist', ['bundle-core-with-es5-adapter', 'bundle-webcomponentsjs', 'dist-app', 'sass',
    'modularize-styles', 'polymer-build']);

// Watchers

gulp.task('watch:core', () => {
    return gulp.watch(Path.lib('/**/*.js'), ['bundle-core-with-es5-adapter']);
});

gulp.task('watch:app', () => {
    return gulp.watch('./src/app/**/*.js', ['dist-app']);
});

gulp.task('watch:sass', () => {
    return gulp.watch(Path.style('/**/*.scss'), ['sass']);
});

gulp.task('watch:modularize-styles', () => {
    return gulp.watch('./src/**/*.scss', ['modularize-styles']);
});

gulp.task('watch:polymer-build', () => {
    return gulp.watch('./src/**/*.html', ['polymer-build']);
});

gulp.task('watch', ['watch:core', 'watch:app', 'watch:sass', 'watch:modularize-styles']);
