# Gulp Workflow

## Overview

This Gulp implementation is an ongoing conversion of Bootstrap's Grunt build process. The Roadmap below is not an exhaustive list of features that need to be implemented - more will be added as I dismantle the Grunt tasks.

## Roadmap

- [x] Sass Compilation
   - [x] Sourcemaps
   - [x] Autoprefixer
   - [x] Sass Processing
   - [x] SCSS Lint
- [ ] Javascript Compilation
   - [x] Babel Compilation
   - [ ] ESLint Integration
   - [ ] QUnit Integration
   - [ ] Remove dependance on Bower, bring jQuery and Tether into NPM
- [ ] Jekyll Integration for Docs


## Build Task Overview

**Run**

`gulp run` - Runs the `test` and `build` tasks.

`gulp run-styles` - Runs the `test-styles` and `build-styles` tasks.

`gulp run-scripts` - Runs the `test-scripts` and `build-scripts` tasks.

**Test**

`gulp test` - Runs the `test-styles` and `test-scripts` tasks.

`gulp test-styles` - Runs the **SCSSLint** process, configured with the `scss/.scss-lint.yml` file.

`gulp test-scripts` - Currently this task does not run any processes

**Build**

`gulp build` - Runs the `build-styles` and `build-scripts` tasks.

`gulp build-styles` - Runs the `clean-styles` task, and then compiles the SCSS with **Sourcemaps**, **Autoprefixer**, **Sass**, and **MinifyCss**

`gulp build-scripts` - Runs the `clean-scripts` task, and then compiles the JavaScript files in `js/src` with **Babel**, then concatenates the `bootstrap.js` file.

**Clean**

`gulp clean` - Runs the `clean-styles` and `clean-scripts` tasks. This is currently unused in our workflow.

`gulp clean-styles` - Deletes all compiled CSS files using **Vinyl Paths** and **Del**.

`gulp clean-scripts` - Deletes all compiled JavaScript files using **Vinyl Paths** and **Del**.

**Jekyll**

_There are currently no complete Jekyll tasks._
