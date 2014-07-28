require('coffee-script').register();

// Load gulp and dependent plugins
var gulp, util, path, $;

try {
  gulp = require("gulp");

  $ = require("gulp-load-plugins")();
  $.amdOptimize = require("amd-optimize");
  $.rimraf = require("rimraf");
  $.ecstatic = require("ecstatic");
  $.through = require("through2");

  path = require("path");
  util = require("gulp-util");

} catch (err) {
  if (err.code == "MODULE_NOT_FOUND") {
    console.error("Please run `npm install`. Some node modules/dependencies are not installed.");
    console.error(err);
    process.exit(-1);
  }
  else {
    throw err;
  }
}

var options = {
  "src": {
    "scripts": "app/scripts/**/*.{js,coffee}",
    "styles": "app/styles/index.less",
    "images": "app/images/**/*.{jpg,png,gif}"
  },
  "dest": {
    "scripts": "dist/scripts",
    "styles": "dist/styles",
    "images": "dist/images"
  }
};


$.handleError = function (err) {
  util.log(util.colors.red("!!"), err.toString())
  util.beep()
}

$.logger = function () {
  return $.through.obj(function (file, enc, done) {
    util.log(">>", util.colors.yellow(path.relative(process.cwd(), file.path)));
    done(null, file);
  });
}

// Load tasks from `tasks` directory
var tasks = require("require-dir")("./tasks");
Object.keys(tasks).forEach(function (taskFilename) {
  // Register task
  tasks[taskFilename](gulp, $, options);
});



gulp.task("watching", function (done) {
  gulp.watch("app/**/*", ["build"]);
});

gulp.task("build", ["scripts", "scripts_min", "styles", "html", "images"]);
gulp.task("watch", ["build", "serve", "watching"]);

gulp.task("default", ["build"]);
