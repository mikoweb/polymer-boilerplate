const Path = require('./gulp/path');
const bundle = require('./gulp/gulp-bundle');
const webcomponents = require('./gulp/gulp-webcomponents');
const rollupBundle = require('./gulp/rollup-bundle');
const gulp = require('gulp');
const bundleUglify = require('./gulp/gulp-uglify');
const bundleSass = require('./gulp/gulp-sass');
const stylemod = require('gulp-polymer-styles');
const sass = require('gulp-sass');
const run = require('gulp-run');
const concat = require('gulp-concat');
const template = require('gulp-template');
const fs = require('fs');

gulp.task('bundle-core', () => {
    return bundle([
        Path.lib('/babel-helpers.js'),
        Path.nodeModules('/axios/dist/axios.js'),
        Path.nodeModules('/objectmodel/dist/object-model.umd.js'),
        Path.nodeModules('/model-persistence/bundle/model-persistence.js'),
        Path.nodeModules('/element-view/bundle/element-view.js'),
        Path.nodeModules('/web-animations-js/web-animations-next-lite.min.js')
    ], 'core.js');
});

gulp.task('bundle-core-with-es5-adapter', gulp.series('bundle-core', () => {
    return gulp.src([
        Path.nodeModules('/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'),
        Path.bundle('/core.min.js'),
        Path.nodeModules('/@polymer/esm-amd-loader/lib/esm-amd-loader.min.js'),
    ]).pipe(concat('core.min.js')).pipe(gulp.dest(Path.bundle()));
}));

gulp.task('bundle-webcomponentsjs', () => {
    return webcomponents();
});

gulp.task('build-app', () => {
    return rollupBundle('./src/app/index.js', 'app.js', {
        externalHelpers: true,
        exclude: ['node_modules/**'],
    });
});

gulp.task('dist-app', gulp.series('build-app', () => {
    return bundleUglify(Path.bundle('/app.js'), Path.bundle());
}));

gulp.task('sass-main', () => {
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

gulp.task('shared-styles-build', () => {
    return bundleSass(Path.style('/shared-styles.scss'), 'shared-styles.css');
});

gulp.task('shared-styles', gulp.series('shared-styles-build', () => {
    return gulp.src('./gulp/template/shared-styles.js')
        .pipe(template({css: fs.readFileSync(Path.bundle('/shared-styles.css'), {encoding: 'utf8'})
                .replace(/\\/gm, '\\\\')}))
        .pipe(gulp.dest('./src/style-modules'));
}));

gulp.task('css-mixins-build', () => {
    return bundleSass(Path.style('/css-mixins.scss'), 'css-mixins.css');
});

gulp.task('css-mixins', gulp.series('css-mixins-build', () => {
    return gulp.src('./gulp/template/css-mixins.js')
        .pipe(template({css: fs.readFileSync(Path.bundle('/css-mixins.css'), {encoding: 'utf8'})
                .replace(/\\/gm, '\\\\')}))
        .pipe(gulp.dest('./src/style-modules'));
}));

gulp.task('polymer-build', gulp.series('modularize-styles', 'shared-styles', () => {
    return run('npm run polymer-build', {}).exec();
}));

gulp.task('dist', gulp.series('bundle-core-with-es5-adapter', 'bundle-webcomponentsjs', 'dist-app', 'sass-main',
    'css-mixins', 'modularize-styles', 'polymer-build'));

// Watchers

gulp.task('watch:core', () => {
    return gulp.watch(Path.lib('/**/*.js'), gulp.series('bundle-core-with-es5-adapter'));
});

gulp.task('watch:app', () => {
    return gulp.watch('./src/app/**/*.js', gulp.series('dist-app'));
});

gulp.task('watch:sass', () => {
    return gulp.watch(Path.style('/**/*.scss'), gulp.series('sass-main', 'shared-styles', 'css-mixins'));
});

gulp.task('watch:modularize-styles', () => {
    return gulp.watch('./src/**/*.scss', gulp.series('modularize-styles'));
});

gulp.task('watch:polymer-build', () => {
    return gulp.watch([
        './src/blocks/**/*.*',
        './src/elements/**/*.*',
        './src/style-modules/**/*.*',
        './fragments/**/*.*',
    ], gulp.series('polymer-build'));
});

gulp.task('watch', gulp.parallel('watch:core', 'watch:app', 'watch:sass', 'watch:modularize-styles'));
