var gulp = require("gulp"),
  sass = require("gulp-sass"),
  pug = require("gulp-pug");
  config = require("./config.json"),
  paths = config.paths;

gulp.task('default', ['build-sass','views']);

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
    .pipe(gulp.dest("./html"));
});
