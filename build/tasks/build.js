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
gulp.task('build-styles', ['clean-styles'], function() {
  return gulp.src(paths.scssSource)
    .pipe($.plumber())
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe(
      $.sass({
        outputStyle: 'compressed'
      }).on("error", $.notify.onError(function (error) {
            return "Error: " + error.message;
      })))
    .pipe($.autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox >= 20'],
    }))
    .pipe($.sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.cssOut))
    .pipe($.minifyCss())
    .pipe(gulp.dest(paths.cssOut));
});

gulp.task('build-scripts', ['clean-scripts'], function() {
  return gulp.src(['js/src/util.js', 'js/src/alert.js', 'js/src/button.js', 'js/src/carousel.js', 'js/src/collapse.js', 'js/src/dropdown.js', 'js/src/modal.js', 'js/src/scrollspy.js', 'js/src/tab.js', 'js/src/tooltip.js', 'js/src/popover.js'])
    .pipe($.babel())
    .pipe($.concat('./bootstrap.js'))
    .pipe(gulp.dest(paths.jsOut));
})
