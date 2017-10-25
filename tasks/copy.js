const gulp = require('gulp');

gulp.task("copy:images", (next) => {
    return gulp.src('./client/src/images/**.*')
        .pipe(gulp.dest('./public/images'));
});