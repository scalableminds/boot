module.exports = (gulp, $) ->

  gulp.task("html", (done) ->
    gulp.src("app/index.html")
      .pipe($.changed("dist"))
    	.pipe(gulp.dest("dist"))
      .pipe($.logger())
  )
