

var theYear = function() {
  return 1991;
}

module.exports = {
  day: 17,
  birthday: function() {
    console.log("May " + this.day + " 1991");
  },
  year: function () {
    console.log(theYear());
  }

};

