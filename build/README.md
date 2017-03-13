# Gulp Workflow

## Overview

This Gulp implementation is an ongoing conversion of Bootstrap's Grunt build process. The Roadmap below is not an exhaustive list of features that need to be implemented - more will be added as I dismantle the Grunt tasks.

_The target is for the only modified file in this branch to be `package.json`. All compiled files should be like-for-like._

## Roadmap

- [x] Sass Compilation
   - [ ] Like-for-like Sourcemaps
   - [x] Autoprefixer
   - [x] Integrate the postcss-flexbugs-fixes module
   - [x] Like-for-like autoprefixing (within reason)
   - [x] Sass Processing
   - [x] SCSS Lint
- [ ] Javascript Compilation
   - [x] Babel Compilation
   - [ ] ESLint Integration
   - [x] QUnit Integration
   - [ ] Remove dependance on Bower, bring jQuery and Tether into NPM
- [x] Documentation Compilation
   - [x] SCSS Lint Docs
   - [x] PostCss Docs
   - [x] Uglify Docs
   - [x] Clean & Copy Docs
- [x] Jekyll Integration for Docs
- [ ] Grunt Scripts
   - [ ] change-version.js
   
## Current issues

- A number of the `dist/css/*.css` files show as changed due to differences with new lines around the Source Map Comment.
- A number of the `dist/css/*.css.map` files show as changed due to Gulp including the comments in the Source Content.
- Because the CSS is minified in a separate process to the one used to compile it - the min.css.map files are different.

## Installation & Setup

Very simply, all that needs to be done is to install the dependencies via NPM, and then use the tasks outlined in the section below to build the source files as required.

```
npm install
```

```
gulp <task>
```

## Build Task Overview

###Run

`gulp run` - Runs the `run-styles` and `run-scripts` tasks.

`gulp run-styles` - Runs the `test-styles` and `build-styles` tasks.

`gulp run-scripts` - Runs the `test-scripts` and `build-scripts` tasks.

`gulp run-docs` - Runs all tasks associated with compiling the Documentation source.

###Test

`gulp test` - Runs the `test-styles` and `test-scripts` tasks.

`gulp test-styles` - Runs the **SCSSLint** process, configured with the `scss/.scss-lint.yml` file.

`gulp test-scripts` - Runs the `test-scripts-qunit` task to run the required QUnit tests.

###Build

`gulp build` - Runs the `build-styles` and `build-scripts` tasks.

`gulp build-styles` - Runs the `clean-styles` task, and then compiles the SCSS with the `styles-build` and `styles-minify` tasks.

`gulp build-scripts` - Runs the `clean-scripts` task, and then compiles the JavaScript files  with the `scripts-build` task.

## Serving the Documentation

As with Grunt, Jekyll can be used to serve the documentation locally.

**Windows Users! You may need to follow this guide - http://jekyll-windows.juthilo.com/ - to configure Jekyll on your machine**

To serve the documentation, run-sequence

`jekyll serve`

Then visit;

http://localhost:9001/
