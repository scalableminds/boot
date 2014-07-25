path = require("path")
module.exports = (gulp, $, options) ->

  gulp.task("scripts", ->

    gulp.src(options.src.scripts)
      .pipe($.if(
        (file) -> return path.extname(file.path) == ".coffee"
        $.coffee()
      ))
      .pipe($.amdOptimize("index"))
      .pipe($.concat("index.js"))
      .pipe(gulp.dest(options.dest.scripts))
      .on("error", console.error.bind(console))
  )
