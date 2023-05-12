const { src, dest, series, parallel, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('node-sass'));
const config = require('./config.json');
const path = require('path');
const paths = config.paths;

function serveFiles(done) {
  browserSync.init({
    server: {
      baseDir: paths.dest.baseDir,
      directory: true
    },
    files: [path.join(paths.dest.baseDir, '**/*')]
  });
  done();
}

function buildViews() {
  return src(paths.source.pug)
    .pipe(pug({
      pretty: true
    }))
    .pipe(dest(paths.dest.baseDir));
}

function buildCss() {
  return src(paths.source.scss)
    .pipe(
      sass({
        includePaths: ['node_modules/susy/sass']
      })
    )
    .pipe(dest(path.join(paths.dest.baseDir, paths.dest.css)))
    .pipe(browserSync.stream());
}

function watchFiles(done) {
  watch(paths.source.scss, buildCss);
  watch(paths.source.pug, buildViews);
  done();
}

exports.css = buildCss;
exports.views = buildViews;
exports.default = series(buildViews, buildCss, serveFiles, watchFiles);
