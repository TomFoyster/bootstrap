var gulp = require('gulp');
var runSequence = require('run-sequence');
var notify = require('gulp-notify');
var scsslint = require('gulp-scss-lint');
var eslint = require('gulp-eslint');

var paths = require('../paths');


gulp.task('test', function(callback) {
  return runSequence(
    ['test-styles', 'test-scripts'],
    callback
  );
});

gulp.task('test-styles', function() {
  return gulp.src(paths.scssSource)
    .pipe(scsslint({
        'config': paths.scssLintConfig
    }))
});

gulp.task('test-scripts', function() {
  /*return gulp.src(['**//*.js','!node_modules/**'])
       .pipe(eslint())
       .pipe(eslint.format())
       .pipe(eslint.failAfterError());*/
});
