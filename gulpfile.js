var gulp = require("gulp"),
  path = require("path"),
  sass = require("gulp-sass"),
  config = require("./config.json");

function resolvePath(pathInput) {
  return path.resolve(pathInput).replace(/\\/g, "/");
}

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

function paths() {
  return config.paths;
}

var pug = require("gulp-pug");

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
