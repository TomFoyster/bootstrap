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


## Build Task Overview

**Run**
`gulp run` - Runs the _test_ and _build_ tasks.

`gulp run-styles` - Runs the _test-styles_ and _build-styles_ tasks.

`gulp run-scripts` - Runs the _test-scripts_ and _build-scripts_ tasks.

**Test**
`gulp test` - Runs the _test-styles_ and _test-scripts_ tasks.

`gulp test-styles` - Runs the **SCSSLint** process, configured with the `scss/.scss-lint.yml` file.

`gulp test-scripts` - Currently this task does not run any processes

**Build**
`gulp build` - Runs the _build-styles_ and _build-scripts_ tasks.

`gulp build-styles` - Runs the _clean-styles_ task, and then compiles the SCSS with **Sourcemaps**, **Autoprefixer**, **Sass**, and **MinifyCss**

`gulp build-scripts` - Runs the _clean-scripts_ task, and then compiles the JavaScript files in `js/src` with **Babel**, then concatenating the `bootstrap.js` file.

**Clean**
`gulp clean` - Runs the _clean-styles_ and _clean-scripts_ tasks. This is currently unused in our workflow.

`gulp clean-styles` - Deletes all compiled CSS files using **Vinyl Paths** and **Del**.

`gulp clean-scripts` - Deletes all compiled JavaScript files using **Vinyl Paths** and **Del**.

**Jekyll**

_There are currently no complete Jekyll tasks._
