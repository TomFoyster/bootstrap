var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var paths = require('../paths');


gulp.task('copy-fonts', function() {
  return gulp.src(paths.fontSource + '/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest(paths.fontDest));
})
