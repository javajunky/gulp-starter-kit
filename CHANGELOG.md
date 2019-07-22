# gulp-starter-kit
Starter kit for using the  [Gulp](https://gulpjs.com/) workflow.

## July 22, 2019
* ✨ Added [gulp-embed-svg](https://www.npmjs.com/package/gulp-embed-svg) to include svg into 'index.html'.
    * ⚠️ You must edit 'app.html' and that will generate 'index.html'
* ✏️ Updated sample layout in 'app.html'
* 🚚 Moved 'js/lib' folder to app base folder

## June 28, 2019
* ✨ Using Wes Bos' [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos) setup
    * ✏️ Updated '.eslintrc' to work with new setup
    * ✏️ Added new linting scripts to 'package.json'
* ✨ Added 'mixins.scss' file
* ✏️ Updated 'index.html' and styling
* ✏️ Updated 'README.md' file to be more descriptive
* 📦 Replacing gulp-uglify with gulp-terser which handles `const` declarations
* ✏️ Added custom port (3030) for BrowserSync

## June 25, 2019
* ✏️ Added start script to 'package.json'
* ✨ Added a way specify a main SCSS file that imports all other SCSS files in 'gulpfile.js'
* ⬆️ Upgraded eslint package to  v6.0.1

## June 21, 2019
* 🚀 Initial code commit
* ✨ Have set up the following in Gulp:
    * [BrowserSync](https://www.browsersync.io/docs/gulp)
    * SCSS processing
        * Sourcemapping
        * Autoprefixing
        * Minifying
    * JS processing
        * Concatenating library scripts
        * Minifying
    * Markdown processing
* ✏️ Editing README.md
* ✨ Included jQuery