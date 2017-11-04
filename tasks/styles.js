const gulp = require('gulp');
const concat = require('gulp-concat');
var stylus = require('gulp-stylus');

gulp.task("styles", (next) => {
    return gulp.src(['./client/src/components/**/*.styl', './client/**/common.styl'])
        //.on("data", (f) => { console.log(f); })
        .pipe(stylus())
        .pipe(concat("styles.css"))
        .pipe(gulp.dest('./public/styles'));
});

gulp.task("styles:vendor", (next) => {
    return gulp.src('./client/styles/vendor/**/*.css')
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest('./public/styles'));
});

gulp.task("styles:watch", (next) => {
    return gulp.watch('./client/src/**/*.stylus', ["styles"]);
});