// This file is a set of instructions that tells gulp what I want it to do.
//*********** IMPORTS *****************
var gulp = require('gulp');     // importing gulp node package
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var imageminOptipng = require('imagemin-optipng');
var imageminJpegtran = require('imagemin-jpegtran');

// Image Task
// Compress
gulp.task('images', function() {
	return gulp.src('images/*')
		.pipe(imagemin({
            optimizationLevel: 7,
            progressive: true
        }))
		.pipe(gulp.dest('images/optimized_images'));
});

// minify-css task
gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('minCSS'));
});

gulp.task('default', ['minify-css', 'images']);