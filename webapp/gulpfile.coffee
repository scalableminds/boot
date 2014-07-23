try
  gulp = require("gulp")
  $ = require("gulp-load-plugins")()

catch err
  if err.code == "MODULE_NOT_FOUND"
    console.error("Please run `npm install`. Some node modules/dependencies are not installed.")
    console.error(err)
    process.exit(-1)
  else
    throw err
