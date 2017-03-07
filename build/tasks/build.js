var gulp = require('gulp');
var runSequence = require('run-sequence');
// This loads all plugins from our project dependencies into the $ variable.
// No need to include them all here.
var $ = require('gulp-load-plugins')();
var paths = require('../paths');

gulp.task('build', function(callback) {
  return runSequence(
    ['build-styles', 'build-scripts'],
    callback
  );
});

// copies changed scss files to the output directory, with sourcemaps
gulp.task('build-styles', ['clean-styles'], function(callback) {
  return runSequence(
    'styles-build',
    'styles-minify',
    callback
  )
});

gulp.task('build-scripts', ['clean-scripts'], function(callback) {
  return runSequence(
    'scripts-build',
    callback
  )
})
