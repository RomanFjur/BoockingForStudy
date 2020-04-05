var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var server = require('browser-sync').create();

/* Task to compile less */
gulp.task('compile-less', function () {
  gulp.src('./website/less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(server.stream())
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('server', function () {
    // Serve files from the root of this project
    server.init({
        server: './website/'
    });
    gulp.watch('./website/less/*.less', gulp.parallel('compile-less'));
    gulp.watch('./website/*.html').on('change', server.reload);
});

/* Task to watch less changes */
gulp.task('watch-less', function () {
  gulp.watch('./website/less/**/*.less', gulp.parallel('compile-less'));
});

/* Task when running `gulp` from terminal */
gulp.task('default', gulp.parallel('watch-less', 'server'));

gulp.task('images', function () {
  return gulp.src('./img/**/*.{png,jpg,svg}')
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest('./website/img'));
});

gulp.task('webp', function () {
  return gulp.src('./website/img/**/*.{png,jpg}')
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest('./website/img'));
});
