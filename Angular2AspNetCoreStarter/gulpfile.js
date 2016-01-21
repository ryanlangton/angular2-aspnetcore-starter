/// <binding Build='default' />

var gulp = require("gulp"),
    ts = require('gulp-typescript');
    watch = require('gulp-watch');

var paths = {
    src: "./App/",
    app: "./wwwroot/app/",
};

gulp.task("watch", function(){
    gulp.watch(paths.src + '/**/*.ts', ['typescript']);
});

gulp.task('typescript', function () {
    var tsProject = ts.createProject('./tsconfig.json');

    gulp.src(paths.src + '/**/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest(paths.app));
});

gulp.task('default', ['typescript']);