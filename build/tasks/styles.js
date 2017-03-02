var gulp = require('gulp');
// This loads all plugins from our project dependencies into the $ variable.
// No need to include them all here.
var $ = require('gulp-load-plugins')();
var paths = require('../paths');
var autoPrefixConfig = require('../config/postcss');


gulp.task('styles-build', function() {
  return gulp.src(paths.scssSource)
    .pipe($.plumber())
    .pipe($.sourcemaps.init(autoPrefixConfig.map))
    .pipe(
      $.sass({outputStyle: 'expanded'}).on("error", $.notify.onError(function (error) {
            return "Error: " + error.message;
      })))
    .pipe($.autoprefixer(autoPrefixConfig.autoprefixer))
    .pipe($.sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.cssOut))
})

gulp.task('styles-minify', function() {
  return gulp.src(paths.cssOut + '**/*.css')
    .pipe($.minifyCss({sourceMap: false }))
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.cssOut));
})
