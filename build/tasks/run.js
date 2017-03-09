var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('run', function(callback) {
  return runSequence(
    ['run-styles', 'run-scripts'],
    callback
  );
});

gulp.task('run-styles', function(callback) {
  return runSequence(
    'test-styles',
    'build-styles',
    callback
  );
});

gulp.task('run-scripts', function(callback) {
  return runSequence(
    'test-scripts',
    'build-scripts',
    callback
  );
});

gulp.task('run-docs', function(callback) {
  return runSequence(
    ['docs-styles', 'docs-scripts', 'docs-dist'],
    callback
  );
});
