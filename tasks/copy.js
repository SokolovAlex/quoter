const gulp = require('gulp');

gulp.task("copy:images", (next) => {
    return gulp.src('./client/static/images/**.*')
        .pipe(gulp.dest('./public/images'));
});

gulp.task("copy:fonts", (next) => {
    return gulp.src('./client/static/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});