http = require("http")

module.exports = (gulp, $, options) ->

  gulp.task("serve", (done) ->
    http.createServer(
      $.ecstatic( root: "dist" )
    ).listen(8080)
  )
