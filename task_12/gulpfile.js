'use strict';

var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    browserSync = require('browser-sync').create(),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    iconfont = require('gulp-iconfont'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch'),
    colors = require('colors'),
    notify = require('gulp-notify');

// Html

gulp.task('html', function() {
    gulp.src('html-dev/*.html')
    .pipe(gulp.dest('build/'));
})

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./build"
    });

    gulp.watch("build/assets/scss/*.scss", ['sass']);
    gulp.watch("build/assets/js/*.js", ['scripts']);
    gulp.watch("build/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    gulp.src('assets/scss/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', notify.onError()))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.stream());
});

// Scripts
gulp.task('scripts', function() {
        gulp.src('assets/js/script.js')
            .pipe(gulp.dest('build/assets/js'))
            .pipe(browserSync.stream());
    });

// Fonts
gulp.task('fonts', function() {
    return gulp.src('assets/fonts/*')
        .pipe(gulp.dest('build/assets/fonts'));
});

// Iconfont
gulp.task('Iconfont', function(){
  return gulp.src(['assets/img/icons/*.svg'])
    .pipe(iconfont({
      fontName: 'iconFont',
      prependUnicode: true,
      formats: ['ttf', 'eot', 'woff', 'svg'],
      normalize: true,
      fontWeight: '300',
      fontHeight: 100,
      fixedWidth: false,
      centerHorizontally: false
    }))
    .pipe(gulp.dest('build/assets/fonts/'))
    .pipe(browserSync.stream());
});

// images
gulp.task('images', function() {
    return gulp.src('assets/img/**/*')
        .pipe(gulp.dest('build/assets/img/'));
});

gulp.task('rebuild', function () {
    runSequence(
        'html',
        'sass',
        'Iconfont',
        'fonts',
        'images',
        function () {
            console.log('project is ' + colors.green.underline('rebuild'));
        }
    );
});

// Watch
gulp.task('watch', function() {
    gulp.watch(['html-dev/*.html'], ['html']);
    gulp.watch(['assets/scss/**/*.scss'], ['sass']);
    gulp.watch(['assets/js/**/*.js'], ['scripts']);
    gulp.watch(['assets/fonts/*.*'], ['fonts']);
    gulp.watch(['assets/img/**/*'], ['images']);
});


// Default task
gulp.task('default', [ 'rebuild', 'serve', 'watch']);