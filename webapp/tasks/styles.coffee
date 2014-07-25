module.exports = (gulp, $, options) ->

  gulp.task("styles", ->

    gulp.src(options.src.styles)
      .pipe($.less())
      .pipe(gulp.dest(options.dest.styles))

  )
