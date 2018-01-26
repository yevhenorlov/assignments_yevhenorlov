/* jshint node:true */
'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    // browsersync = require('browser-sync'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    iconfont = require('gulp-iconfont'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch'),
    colors = require('colors'),
    connect = require('gulp-connect'),
    notify = require('gulp-notify');

// Connect
gulp.task('connect', function () {
    connect.server({
        root: '',
        port: '8000',
        livereload: true,
    });
});

// Html

gulp.task('html', function() {
    gulp.src('html-dev/*.html')
    .pipe(gulp.dest('build/'));
})

// Styles
gulp.task('sass', function () {
    gulp.src('assets/scss/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', notify.onError()))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(connect.reload());
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
      // timestamp: runTimestamp,
      normalize: true,
      fontWeight: '300',
      fontHeight: 100,
      fixedWidth: false,
      centerHorizontally: false
    }))
    .pipe(gulp.dest('build/assets/fonts/'))
    .pipe(connect.reload());
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
    gulp.watch(['assets/img/icons/*.svg'], ['Iconfont']);
    gulp.watch(['assets/fonts/*.*'], ['fonts']);
    gulp.watch(['assets/img/**/*'], ['images']);
});


// Default task
gulp.task('default', [ 'rebuild', 'connect', 'watch']);



//to install modules run "npm install" (just one time for the project)

//js minify example
// to run "gulp index"
// gulp.task('index', function () {
//     gulp.src('assets/js/index.js')
//         .pipe(minify({
//             ext: {
//                 src: '.js',
//                 min: '-min.js'
//             },
//             // exclude: ['tasks'],
//             // ignoreFiles: ['.combo.js', '-min.js']
//         }))
//         .pipe(gulp.dest('assets/js'))
// });
//
//
// // for multiple scripts
// var source = {
//     js : [
//         "assets/js/dataTables.responsive.js",
//         "assets/js/index.js",
//         "assets/js/vue.js",
//     ]
// };
//
// // Scripts concat // to run "gulp scripts"
// gulp.task('scripts', function() {
//     gulp.src(source.js)
//         .pipe(concat('scripts.min.js'))
//         // .pipe(uglify())
//         .pipe(gulp.dest('assets/js'));
// });
//
//
// // Scripts concat and minify // to run "gulp scripts-min"
// gulp.task('scripts-min', function() {
//     gulp.src(source.js)
//         .pipe(concat('scripts.js'))
//         .pipe(minify())
//         .pipe(gulp.dest('assets/js'))
// });