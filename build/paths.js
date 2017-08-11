var appRoot = '/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  scssSource: 'scss/**/*.scss',
  docsScssSource: 'docs/assets/scss/*.scss',
  jsSource: 'js/',
  cssOut: outputRoot + 'css/',
  jsOut: outputRoot + 'js/',
  output: outputRoot,
  scssLintConfig: 'scss/.scss-lint.yml',
  jekyllConfig: '_config.yml',
  fontSource: 'fonts/',
  fontDest: outputRoot + 'fonts/'
};
