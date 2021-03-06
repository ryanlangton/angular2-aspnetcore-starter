﻿/// <binding Build='default' />

var del = require('del'),
    gulp = require("gulp"),
    ts = require('gulp-typescript'),
    watch = require('gulp-watch');

var webproj = "./Angular2AspNetCoreStarter/";
var webroot = webproj + "wwwroot/";
var appsource = webproj + "App/";
var appout = webroot + "app/";
var jspmsource = "./jspm_packages/";
var jspmout = webroot + "jspm_packages/";

var paths = {
    webroot: webroot,
    src: appsource,
    app: appout,
    jspm: jspmsource,
    jspm_out: jspmout
};

gulp.task('watch', ['watch-typescript', 'watch-html']);

gulp.task('watch-typescript', function(){
    gulp.watch(paths.src + '/**/*.ts', ['build-typescript']);
});

gulp.task('clean-typescript', function () {
    del([paths.app + '/**/*.ts']);
});

gulp.task('build-typescript', ['clean-typescript'], function () {
    var tsProject = ts.createProject('./tsconfig.json');

    gulp.src(paths.src + '/**/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest(paths.app));
});

gulp.task('watch-html', function () {
    gulp.watch(paths.src + '/**/*.html', ['copy-html']);
});

gulp.task('clean-html', function () {
    del([paths.app + '/**/*.html']);
});

gulp.task('copy-html', ['clean-html'], function () {
    gulp.src(paths.src + '/**/*.html')
        .pipe(gulp.dest(paths.app));
});

gulp.task('copy-jspm', ['clean-jspm', 'copy-config'], function() {
    gulp.src(paths.jspm + "**/*.{js,css,map}")
        .pipe(gulp.dest(paths.jspm_out));
});

gulp.task('clean-jspm', function(){
    del([paths.jspm_out + "**/*.*"]); 
});

gulp.task('copy-config', ['clean-config'], function(){
    gulp.src("./config.js")
        .pipe(gulp.dest(paths.webroot));
});

gulp.task('clean-config', function(){
    del(paths.webroot + 'config.js'); 
});

gulp.task('default', ['build-typescript', 'copy-html', 'copy-jspm']);