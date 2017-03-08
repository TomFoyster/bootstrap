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
   - [ ] QUnit Integration
   - [ ] Remove dependance on Bower, bring jQuery and Tether into NPM
- [ ] Jekyll Integration for Docs

## Current issues

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

`gulp run` - Runs the `test` and `build` tasks.

`gulp run-styles` - Runs the `test-styles` and `build-styles` tasks.

`gulp run-scripts` - Runs the `test-scripts` and `build-scripts` tasks.

###Test

`gulp test` - Runs the `test-styles` and `test-scripts` tasks.

`gulp test-styles` - Runs the **SCSSLint** process, configured with the `scss/.scss-lint.yml` file.

`gulp test-scripts` - Currently this task does not run any processes

###Build

`gulp build` - Runs the `build-styles` and `build-scripts` tasks.

`gulp build-styles` - Runs the `clean-styles` task, and then compiles the SCSS with the `styles-build` and `styles-minify` tasks.

`gulp build-scripts` - Runs the `clean-scripts` task, and then compiles the JavaScript files  with the `scripts-build` task.

###Clean

`gulp clean` - Runs the `clean-styles` and `clean-scripts` tasks. This is currently unused in our workflow.

`gulp clean-styles` - Deletes all compiled CSS files using **Vinyl Paths** and **Del**.

`gulp clean-scripts` - Deletes all compiled JavaScript files using **Vinyl Paths** and **Del**.

###Styles

**These tasks are not designed to be ran independantly - they are simply use to abstract functionality from cluttered files**

`gulp styles-build` - Compiles the SCSS with **Sourcemaps**, **Autoprefixer**, and **Sass**.

`gulp styles-minify` - Minifies the CSS created with `styles-build` with **MinifyCss**.

###Scripts

`gulp scripts-build` - Runs the `scripts-src` and `scripts-dist` tasks.

`gulp scripts-src` - Using **Babel**; creates browser compatible versions of the `js/src` files in `js/dist`, complete with **sourcemaps**

`gulp scripts-dist` - Creates the compiled `dist/js/bootstrap.js` and `dist/js/bootstrap.min.js` files by serially running the `scripts-dist-build` & `scripts-dist-babel` tasks.

`gulp scripts-dist-build` - Concatenates the `js/src` files into `dist/js/bootstrap.js`

`gulp scripts-dist-babel` - Takes the concatenated file from `scripts-dist-build` and uses **Babel** to transpile the JavaScript into a browser compatible format. Then inserts the JavaScript headers and footers into the compiled file. Finally - the compiled file is minified into `dist/js/bootstrap.min.js`

###Jekyll

_There are currently no complete Jekyll tasks._
