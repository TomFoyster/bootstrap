var gulp = require('gulp');
var runSequence = require('run-sequence');
// This loads all plugins from our project dependencies into the $ variable.
// No need to include them all here.
var $ = require('gulp-load-plugins')();

var paths = require('../paths');


gulp.task('test', function(callback) {
  return runSequence(
    ['test-styles', 'test-scripts'],
    callback
  );
});

gulp.task('test-styles', function() {
  return gulp.src(paths.scssSource)
    .pipe($.scssLint({
        'config': paths.scssLintConfig
    }))
});

gulp.task('test-scripts', function(callback) {
  return runSequence(
    'test-scripts-qunit',
    callback
  );
});

gulp.task('test-scripts-qunit', function() {
  return gulp.src('./js/tests/index.html')
        .pipe($.qunit());
})
