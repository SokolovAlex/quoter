const gulp = require('gulp');
const gutil = require('gulp-util');
const server = require('gulp-express');
const argv = require('optimist').argv;
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

require("./tasks/styles");
require("./tasks/copy");

const options = {
    watch: "w" in argv
};

gulp.task("start", () => {
    return server.run(['server/app.js']);
});

gulp.task("watch:server", (next) => {
    gulp.watch('server/**/*.js', ['start']);
    next();
});

gulp.task("webpack", (next) => {
    webpackConfig.watch = options.watch;
    webpack(webpackConfig, (err, stats) => {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({ modules: false, colors: true }));
        if (!options.watch) {
            next();
        }
    });
});

gulp.task('default', ['webpack', 'start', 'copy:images', 'copy:fonts', 'styles']);

gulp.task('css', ['styles', 'styles:vendor']);

gulp.task('css:watch', ['css', 'styles:watch']);

gulp.task('dev', ['default', 'watch:server']);

gulp.task('server', ['start']);