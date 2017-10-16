var gulp = require("gulp"),
  path = require("path"),
  sass = require("gulp-sass"),
  config = require("./config.json"),
  pug = require("gulp-pug");

function resolvePath(pathInput) {
  return path.resolve(pathInput).replace(/\\/g, "/");
}

function paths() {
  return config.paths;
}

gulp.task('default', ['build-sass','views']);

gulp.task("build-sass", function() {
  return gulp
    .src("**/*.scss", { cwd: resolvePath(paths().source.scss) })
    .pipe(
      sass({
        includePaths: ["node_modules/susy/sass"]
      })
    )
    .pipe(gulp.dest(paths().dest.css));
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
