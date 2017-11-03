var gulp = require('gulp'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),
  config = require('./config.json'),
  browserSync = require('browser-sync').create(),
  paths = config.paths,
  path = require('path');

gulp.task('default', ['build-sass', 'build-views', 'serve', 'watch']);

gulp.task('watch', function () {
  gulp.watch(`${paths.source.scss}/**/.scss`, ['build-sass']);
  gulp.watch(`${paths.source.pug}/*.pug`, ['build-views']);
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: paths.dest.baseDir,
      directory: true
    },
    files: [`${paths.dest.baseDir}/**/*`]
  });
});

gulp.task('build-sass', function buildCss() {
  return gulp
    .src('*.scss', { cwd: paths.source.scss })
    .pipe(
      sass({
        includePaths: ['node_modules/susy/sass']
      })
    )
    .pipe(gulp.dest(path.join(paths.dest.baseDir, paths.dest.css)));
});

gulp.task('build-views', function buildHtml() {
  return gulp
    .src('/*.pug', { cwd: paths.source.pug })
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest(path.join(paths.dest.baseDir, paths.dest.html)));
});
