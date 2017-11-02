var gulp = require("gulp"),
  sass = require("gulp-sass"),
  pug = require("gulp-pug"),
  config = require("./config.json"),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  paths = config.paths;

gulp.task('default', ['build-sass','views', 'watch', 'serve']);

gulp.task('watch', function(){
  gulp.watch('./scss/**/*.scss', ['build-sass']);
  gulp.watch('./views/*.pug', ["views"]);
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./public",
      directory: true
    },
    files: ['./public/**/*']
  });
});

gulp.task("build-sass", function() {
  return gulp
    .src("*.scss", { cwd: (paths.source.scss) })
    .pipe(
      sass({
        includePaths: ["node_modules/susy/sass"]
      })
    )
    .pipe(gulp.dest(paths.dest.css));
});

gulp.task("views", function buildHTML() {
  return gulp
    .src("./views/*.pug")
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("./public/html"));
});
