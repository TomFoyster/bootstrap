var gulp = require('gulp');
var runSequence = require('run-sequence');
// This loads all plugins from our project dependencies into the $ variable.
// No need to include them all here.
var $ = require('gulp-load-plugins')();
var fs = require('fs');
var paths = require('../paths');

var pkg = JSON.parse(fs.readFileSync('./package.json'));
var babelConfig = {
  "presets": [
    [
      "es2015",
      {
        "modules": false,
        "loose": true
      }
    ]
  ],
  "plugins": [
    "transform-es2015-modules-strip"
  ]
};


// Code to insertBefore
var banner = '/*!\n' +
          ' * Bootstrap v' + pkg.version + ' (' + pkg.homepage +')\n' +
          ' * Copyright 2011-' + new Date().getFullYear() + ' ' + pkg.author + '\n' +
          ' * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n' +
          ' */\n';
var jqueryCheck = 'if (typeof jQuery === \'undefined\') {\n' +
               '  throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\\\'s JavaScript.\')\n' +
               '}\n';
var jqueryVersionCheck = '+function ($) {\n' +
                      '  var version = $.fn.jquery.split(\' \')[0].split(\'.\')\n' +
                      '  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {\n' +
                      '    throw new Error(\'Bootstrap\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\')\n' +
                      '  }\n' +
                      '}(jQuery);\n\n';


var bannerInsert = banner + '\n' + jqueryCheck + '\n' + jqueryVersionCheck + '\n+function () {\n\n';
var footerInsert = '\n\n}();\n';


gulp.task('scripts-babel-src', function() {
  return gulp.src(['js/src/util.js', 'js/src/alert.js', 'js/src/button.js', 'js/src/carousel.js', 'js/src/collapse.js', 'js/src/dropdown.js', 'js/src/modal.js', 'js/src/scrollspy.js', 'js/src/tab.js', 'js/src/tooltip.js', 'js/src/popover.js'])
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('js/dist'));
})

gulp.task('scripts-build-dist', function() {
  return gulp.src(['js/src/util.js', 'js/src/alert.js', 'js/src/button.js', 'js/src/carousel.js', 'js/src/collapse.js', 'js/src/dropdown.js', 'js/src/modal.js', 'js/src/scrollspy.js', 'js/src/tab.js', 'js/src/tooltip.js', 'js/src/popover.js'])
    .pipe($.concatUtil(pkg.name + '.js', {
      process: function (src) {
        return src.replace(/^(export|import).*/gm, '')
      }
    }))
    .pipe(gulp.dest(paths.jsOut));
})

gulp.task('scripts-babel-dist', function() {
  return gulp.src(paths.jsOut + pkg.name + '.js')
    .pipe($.babel({extends: '../../js/.babelrc'}))
    .pipe($.insert.wrap(bannerInsert, footerInsert))
    .pipe(gulp.dest(paths.jsOut));
})

gulp.task('scripts-build', function(callback) {
  return runSequence(
    'scripts-babel-src',
    'scripts-build-dist',
    'scripts-babel-dist',
    callback
  )
})
