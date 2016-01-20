/// <binding Clean='clean' ProjectOpened='watch' Build='default' />

var gulp = require("gulp"),
    ts = require('gulp-typescript');
    watch = require('gulp-watch');

var paths = {
    app: "./wwwroot/app/",
};

gulp.task("watch", function(){
    gulp.watch(paths.app + '/**/*.ts', ['typescript']);
});

gulp.task('typescript', function () {
    var tsProject = ts.createProject('./tsconfig.json');

    gulp.src(paths.app + '/**/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest(paths.app));
});

gulp.task('default', ['typescript']);