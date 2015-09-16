// Build and test tasks.

'use strict';

let gulp = require('gulp');
let jshint = require('gulp-jshint');
let del = require('del');
let sass = require('gulp-sass');
let nodemon = require('gulp-nodemon');
let useref = require('gulp-useref');
let gulpif = require('gulp-if');
let minifyCss = require('gulp-minify-css');

// Lints JavaScript files.
gulp.task('lint', function() {
  return gulp.src(['gulpfile.js', 'server/**/*.js', 'client/app.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Cleans out the public directory.
gulp.task('clean', function() {
  del(['public']);
});

// Builds all necessary files.
// TODO(amitburst): Not playing nicely with AngularJS.
gulp.task('build', ['clean', 'lint'], function() {
  let assets = useref.assets();
  return gulp.src('client/index.html')
    .pipe(assets)
    .pipe(gulpif('*.css', sass()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('public'));
});

// Uses Nodemon to restart the server when files change.
gulp.task('develop', function() {
  nodemon({
    script: 'server/app.js',
    ext: 'html js scss',
    ignore: ['node_modules/**/*', 'client/bower_components/**/*', 'public/**/*'],
    tasks: ['build']
  });
});

// Default gulp task.
gulp.task('default', ['build']);
