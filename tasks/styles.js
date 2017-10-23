const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task("styles", (next) => {
    return gulp.src('./client/src/**/*.css')
        //.on("data", (f) => { console.log(f); })
        .pipe(concat("styles.css"))
        .pipe(gulp.dest('./dist/styles'));
});