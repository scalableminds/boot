var gulp = require("gulp");
var coffee = require("gulp-coffee");
var concat = require("gulp-concat");
var header = require("gulp-header");
var footer = require("gulp-footer");
var fs = require("fs");

gulp.task("scripts", function () {
  return gulp.src([
    "src/index.coffee"
  ])
    .pipe(coffee({
      bare : true
    }))
    .pipe(concat("index.js"))
    .pipe(header(fs.readFileSync("src/header.js", "utf8")))
    .pipe(footer(fs.readFileSync("src/footer.js", "utf8")))
    .pipe(gulp.dest("lib"));
});

gulp.task("default", ["scripts"]);
