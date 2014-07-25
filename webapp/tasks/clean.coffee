module.exports = (gulp, $) ->

  gulp.task("clean", (done) ->
    $.rimraf("./dist", done)
  )
