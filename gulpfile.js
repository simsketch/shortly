// Build and test tasks.

'use strict';

let gulp = require('gulp');
let jshint = require('gulp-jshint');
let nodemon = require('gulp-nodemon');

gulp.task('lint', function() {
  return gulp.src(['gulpfile.js', 'server/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('develop', function() {
  nodemon({
    script: 'server/app.js',
    ext: 'js',
    ignore: ['node_modules/**/*.js'],
    tasks: ['lint']
  });
});
