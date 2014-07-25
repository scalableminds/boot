require('coffee-script').register();

// Load gulp and dependent plugins
var gulp, $;

try {
  gulp = require("gulp");
  $ = require("gulp-load-plugins")();
  $.amdOptimize = require("amd-optimize");
  $.rimraf = require("rimraf");
  $.ecstatic = require("ecstatic");

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
    "styles": "app/styles/index.less"
  },
  "dest": {
    "scripts": "dist/scripts",
    "styles": "dist/styles"
  }
};

// Load tasks from `tasks` directory
var tasks = require("require-dir")("./tasks");
Object.keys(tasks).forEach(function (taskFilename) {
  // Register task
  tasks[taskFilename](gulp, $, options);
});

gulp.task("watch:build", function () {
  gulp.watch("app/**/*", ["build"]);
});

gulp.task("build", ["scripts", "styles", "html"]);
gulp.task("watch", ["build", "serve", "watch:build"]);

gulp.task("default", ["build"]);
