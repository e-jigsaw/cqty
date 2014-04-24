//@ sourceMappingURL=display.map
var exec;

exec = require("child_process").exec;

module.exports = function() {
  var today, yesterday;

  today = new Date();
  yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return exec("git log --numstat --all --after=\"" + yesterday + "\" --pretty=format:''", function(err, stdout, stderr) {
    var file, list, match, minus, plus, _i, _len;

    list = stdout.split("\n");
    plus = minus = 0;
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      file = list[_i];
      match = file.match(/^(\d+)\t(\d+)/);
      if (match !== null) {
        plus += parseInt(match[1]);
        minus += parseInt(match[2]);
      }
    }
    return console.log("" + plus + " insertions(+), " + minus + " deletions(-)");
  });
};
