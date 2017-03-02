var gulp = require('gulp');
var runSequence = require('run-sequence');
// This loads all plugins from our project dependencies into the $ variable.
// No need to include them all here.
var $ = require('gulp-load-plugins')();

var paths = require('../paths');

gulp.task('build-docs', function() {
  gulp.src([])
        .pipe(jekyll({
            config: paths.jekyllConfig,
            bundleExec: true
        }))
        .pipe(gulp.dest('./deploy/'));
});
