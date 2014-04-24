module.exports = (argv)->
  display = require("./display")
  switch argv[2]
    when "t", "today"     then display.today()
    when "y", "yesterday" then display.yesterday()
    else display.today()