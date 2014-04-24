//@ sourceMappingURL=argv.map
module.exports = function(argv) {
  var display;

  display = require("./display");
  switch (argv[2]) {
    case "t":
    case "today":
      return display.today();
    case "y":
    case "yesterday":
      return display.yesterday();
    default:
      return display.today();
  }
};
