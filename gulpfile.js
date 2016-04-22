'use strict';

// Required gulp modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// List of scripts to compile
var scripts = [
    './bower_components/jquery/dist/jquery.js',
    './javascript/APP_NAME.js'
];

// Compile SCSS
// TO add include paths pipe the following:
//      .pipe(sass({includePaths: ['./root_path/custom_folder']}).on('error', sass.logError))
gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')
        .pipe(gulp.dest('./css'));
});

// Compile JS
gulp.task('js', function () {
    gulp.src(scripts)
        .pipe(uglify())
        .pipe(concat('APP_NAME.prod.js'))
        .pipe(gulp.dest('./js'));
});

// Watch task, indicate which files should be monitored for changes
gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['js']);
});

// Gulp default task
gulp.task('default', ['sass', 'js', 'watch']);
