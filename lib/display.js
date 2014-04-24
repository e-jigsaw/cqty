//@ sourceMappingURL=display.map
var display, exec;

exec = require("child_process").exec;

display = function(since_date, until_date) {
  return exec("git log --numstat --all --since=\"" + since_date + "\" --until=\"" + until_date + "\" --pretty=format:''", function(err, stdout, stderr) {
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

module.exports = {
  today: function() {
    var since_date, until_date;

    until_date = new Date();
    since_date = new Date(until_date.getFullYear(), until_date.getMonth(), until_date.getDate());
    return display(since_date, until_date);
  },
  yesterday: function() {
    var since_date, today, until_date;

    today = new Date();
    until_date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    since_date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    return display(since_date, until_date);
  }
};
