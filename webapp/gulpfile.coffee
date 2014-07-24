try
  gulp = require("gulp")
  $ = require("gulp-load-plugins")()
  amdOptimize = require("amd-optimize")

catch err
  if err.code == "MODULE_NOT_FOUND"
    console.error("Please run `npm install`. Some node modules/dependencies are not installed.")
    console.error(err)
    process.exit(-1)
  else
    throw err


gulp.task("test", ->

  gulp.src("app/scripts/**/*.coffee")
    .pipe($.coffee())
    .pipe(amdOptimize("test"))
    .pipe(gulp.dest("dist/scripts"))
)
