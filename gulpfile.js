const gulp = require('gulp'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	markdown = require('gulp-markdown'),
	browserSync = require('browser-sync').create();

const app_base = './app';
const paths = {
	styles: {
		// If you have a main SCSS file that imports all your other SCSS files, or else set to empty string
		main: `${app_base}/scss/main.scss`,
		// By using styles/**/*.sass we're telling gulp to check all folders for any sass file
		src: `${app_base}/scss/*.scss`,
		// Compiled files will end up in whichever folder it's found in (partials are not compiled)
		dest: `${app_base}/css`,
	},
	scripts: {
		src: `${app_base}/js/*.js`,
		dest: `${app_base}/js/min`,
	},
	markdown: {
		src: './*.md',
		dest: './',
	},
};
const lib_path = './app/js/lib/'; // path to vendor libraries

/* List of JavaScript libraries in order of concatenation */
const jslib_files = [`${lib_path}jquery-latest.min.js`]; // set to [] if not loading any JavaScript files
const js_src_array = jslib_files.concat(paths.scripts.src); // concats lib files with your JavaScript files

/** ===================================
 * Process SCSS files
 ===================================== */
function style() {
	const src = paths.styles.main ? paths.styles.main : paths.styles.src;
	return (
		gulp
			.src(src)
			// Initialize sourcemaps before compilation starts
			.pipe(sourcemaps.init())
			.pipe(sass())
			.on('error', sass.logError)
			// Use postcss with autoprefixer and compress the compiled file using cssnano
			.pipe(postcss([autoprefixer(), cssnano()]))
			// Now add/write the sourcemaps
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(paths.styles.dest))
			// Add browsersync stream pipe after compilation
			.pipe(browserSync.stream())
	);
}

/** ===================================
 * Process JavaScript files
 ===================================== */
function script() {
	// console.log(`js_src_array: ${js_src_array}`);
	return (
		gulp
			.src(js_src_array)
			.pipe(concat('bundle.js'))
			.pipe(uglify())
			.pipe(
				rename(function(path) {
					path.basename += '-min';
				})
			)
			.pipe(gulp.dest(paths.scripts.dest))
			// Add browsersync stream pipe after compilation
			.pipe(browserSync.stream())
	);
}

/** ===================================
 * Process Markdown files
 ===================================== */
function markdownWatch() {
	return gulp
		.src([paths.markdown.src])
		.pipe(markdown())
		.pipe(gulp.dest(paths.markdown.dest));
}

// A simple task to reload the page
function reload() {
	browserSync.reload();
}

// Add browsersync initialization at the start of the watch task
function watch() {
	browserSync.init({
		// You can tell browserSync to use this directory and serve it as a mini-server
		server: {
			baseDir: './app',
		},
		// If you are already serving your website locally using something like apache
		// You can use the proxy setting to proxy that instead
		// proxy: "yourlocal.dev"
	});
	gulp.watch(paths.styles.src, style);
	gulp.watch(paths.scripts.src, script);
	gulp.watch(paths.markdown.src, markdownWatch);
	// We should tell gulp which files to watch to trigger the reload
	// This can be html or whatever you're using to develop your website
	// Note -- you can obviously add the path to the Paths object
	// gulp.watch("src/*.html", reload);
	gulp.watch('app/*.html').on('change', reload);
}

// We don't have to expose the reload function
// It's currently only useful in other functions

// Don't forget to expose the task!
exports.watch = watch;

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;
exports.script = script;
exports.markdown = markdownWatch;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
const build = gulp.parallel(markdownWatch, style, script, watch);

/*
 * You can still use `gulp.task` to expose tasks
 */
// gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);
