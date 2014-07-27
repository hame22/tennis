var gulp = require('gulp'),
sass = require('gulp-sass'),
changed = require('gulp-changed'),
ngmin = require('gulp-ngmin'),
watch = require('gulp-watch');

gulp.task('watch', function () {
	gulp.src('./public/scss/*.scss')
        .pipe(watch(function(files) {
            return files.pipe(sass())
                .pipe(gulp.dest('./public/css'));
        }));
});

gulp.task('sass', function () {
	gulp.src('./public/scss/*.scss')
	.pipe(changed('./public/css'))
	.pipe(sass())
	.pipe(gulp.dest('./public/css'))
});

gulp.task('default', ['watch']);

