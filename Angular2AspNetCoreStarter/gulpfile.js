/// <binding Build='default' />

var del = require('del'),
    gulp = require("gulp"),
    ts = require('gulp-typescript'),
    watch = require('gulp-watch');

var paths = {
    src: "./App/",
    app: "./wwwroot/app/",
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
    gulp.watch(paths.src + '/**/*.html', ['build-html']);
});

gulp.task('clean-html', function () {
    del([paths.app + '/**/*.html']);
});

gulp.task('build-html', ['clean-html'], function () {
    gulp.src(paths.src + '/**/*.html')
        .pipe(gulp.dest(paths.app));
})

gulp.task('default', ['build-typescript', 'build-html']);