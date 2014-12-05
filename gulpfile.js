var gulp = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rimraf = require('rimraf');

var paths = {
    js: "./js/**/*.js",
    dst: "./build/"
};

//clean build directory cmd $> gulp clean
gulp.task('clean', function(cb) {
    rimraf(paths.dst, cb);
});

/*-------------------------------------------------------------------------- JAVASCRIPT
 */

// Lint JS              cmd $> gulp jshint
gulp.task('jshint', function() {
    return gulp.src(paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/*
 * Clean build dir, lints JS files, generates sourcemaps,
 * uglifies JS files, concats JS into all.min.js,
 * writes sourcemaps, outputs js file into build dir
 * cmd $> gulp scrips
 */
gulp.task('scripts', ['clean', 'jshint'], function() {
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dst));
});

// Watch JS         cmd $> gulp watchJS
gulp.task('watchJS', function() {
    return watch(paths.js, ['scripts']);
});

gulp.task('default', ['scripts']); // default task is run when simply running $> gulp
