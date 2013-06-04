//@ sourceMappingURL=display.map
var exec;

exec = require("child_process").exec;

module.exports = function() {
  var dateFormat, today, yesterday;

  today = new Date();
  yesterday = new Date(today.getTime() - (1000 * 3600 * 24));
  dateFormat = "" + (yesterday.getFullYear()) + "-" + (yesterday.getMonth() + 1) + "-" + (yesterday.getDate());
  return exec("git log --numstat --after=" + dateFormat + " --pretty=format:''", function(err, stdout, stderr) {
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
