module.exports = (gulp, $) ->

  gulp.task("html", (done) ->
    gulp.src("app/index.html")
    	.pipe(gulp.dest("dist"))
  )
