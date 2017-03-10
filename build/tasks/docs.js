var gulp = require('gulp');
var runSequence = require('run-sequence');
// This loads all plugins from our project dependencies into the $ variable.
// No need to include them all here.
var $ = require('gulp-load-plugins')();
var postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

var paths = require('../paths');
var autoPrefixConfig = require('../config/postcss');


// Main file tasks
gulp.task('docs-styles', function(callback) {
  return runSequence(
    'docs-scss-lint',
    'docs-sass',
    'docs-clean-css',
    ['docs-postcss', 'docs-postcss-examples'],
    callback
  );
});

gulp.task('docs-scripts', function(callback) {
  return runSequence(
    'docs-uglify-js',
    callback
  )
});

gulp.task('docs-dist', function() {
  return gulp.src('dist/**/*')
    .pipe(gulp.dest('docs/dist/'));
});

// Style Tasks
gulp.task('docs-scss-lint', function() {
  return gulp.src([paths.docsScssSource, '!docs/assets/scss/docs.scss'])
    .pipe($.scssLint({
        'config': paths.scssLintConfig
    }));
});

gulp.task('docs-sass', function() {
  return gulp.src('docs/assets/scss/docs.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init(autoPrefixConfig.map))
    .pipe(
      $.sass({outputStyle: 'expanded', precision: 6}).on("error", $.notify.onError(function (error) {
            return "Error: " + error.message;
      })))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.sourcemaps.write('.', {addComment: false}))
    .pipe(gulp.dest('docs/assets/css/'));
});

gulp.task('docs-clean-css', function() {
  return gulp.src('docs/assets/css/docs.min.css')
    .pipe($.sourcemaps.init())
    .pipe($.cleanCss({level: 1}))
    .pipe($.sourcemaps.write('.', {addComment: false}))
    .pipe(gulp.dest('docs/assets/css/'));
});

gulp.task('docs-postcss', function() {
  return gulp.src('docs/assets/css/docs.min.css')
    .pipe($.autoprefixer(autoPrefixConfig.autoprefixer))
    .pipe($.postcss([postcssFlexbugsFixes()]))
    .pipe(gulp.dest('docs/assets/css/'));
});

gulp.task('docs-postcss-examples', function() {
  return gulp.src('docs/examples/**/*.css')
    .pipe($.autoprefixer(autoPrefixConfig.autoprefixer))
    .pipe($.postcss([postcssFlexbugsFixes()]))
    .pipe(gulp.dest('docs/examples/'));
});

// Script Tasks
gulp.task('docs-uglify-js', function() {
  return gulp.src(['docs/assets/js/vendor/anchor.min.js', 'docs/assets/js/vendor/clipboard.min.js', 'docs/assets/js/vendor/holder.min.js', 'docs/assets/js/src/application.js'])
    .pipe($.concatUtil('docs.min.js'))
    .pipe($.uglify({output: {comments: /^!/i}}))
    .pipe(gulp.dest('docs/assets/js/'));
});
