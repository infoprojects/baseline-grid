var gulp = require('gulp'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),
  config = require('./config.json'),
  browserSync = require('browser-sync').create(),
  paths = config.paths;

gulp.task('default', ['build-sass', 'build-views', 'serve', 'watch']);

gulp.task('watch', function(){
  gulp.watch('./scss/**/*.scss', ['build-sass']);
  gulp.watch('./views/*.pug', ['build-views']);
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: paths.source.baseDir,
      directory: true
    },
    files: ['./public/**/*']
  });
});

gulp.task('build-sass', function() {
  return gulp
    .src('*.scss', { cwd: (paths.source.scss) })
    .pipe(
      sass({
        includePaths: ['node_modules/susy/sass']
      })
    )
    .pipe(gulp.dest(paths.dest.css));
});

gulp.task('build-views', function buildHTML() {
  return gulp
    .src('*.pug', { cwd: (paths.source.pug) })
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest(paths.dest.html));
});
