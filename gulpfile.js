var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rimraf = require('rimraf');
var less = require('gulp-less');
var path = require('path');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');

var paths = {
    js: "./js/**/*.js",
    less: "./less/**/*.less",
    dst: "./dist/",
};

//clean dist directory cmd $> gulp clean
gulp.task('clean', function (cb) {
    rimraf(paths.dst, cb);
});


/*-------------------------------------------------------------------------- LESS & CSS
 */
gulp.task('less', function () {
    return gulp.src(paths.less)
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concatCss("all.min.css"))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./dist'));
});


/*-------------------------------------------------------------------------- JAVASCRIPT
 */

/*
 * Clean build dir, lints JS files, generates sourcemaps,
 * uglifies JS files, concats JS into all.min.js,
 * writes sourcemaps, outputs js file into build dir
 * cmd $> gulp scrips
 */
gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dst));
});

// Watch JS         cmd $> gulp watch:js
gulp.task('watch:js', ['clean'], function () {
    return gulp.watch(paths.js, ['js']);
});

// Watch LESS         cmd $> gulp watch:less
gulp.task('watch:less', ['clean', 'less'], function () {
    return gulp.watch(paths.less, ['less']);
});


// Watch All         cmd $> gulp watch
gulp.task('watch', ['clean', 'less', 'js'], function () {
    return gulp.watch([paths.less, paths.js], ['less', 'js']);
});

gulp.task('default', ['clean', 'less', 'js']); // default task is run when simply running $> gulp
