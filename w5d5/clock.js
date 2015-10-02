function Clock () {
  this.date = new Date();
}

Clock.TICK = 1000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  console.log(this.date.toTimeString().slice(0,9));
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
  // this.date = new Date();
  this.printTime();
  var that = this;
  setInterval(function() { that._tick(); }, 1000);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  // 2. Call printTime.
  // console.log(this.date.getSeconds());
  var seconds = this.date.getSeconds();
  this.date.setSeconds(seconds + Clock.TICK/1000);
  this.printTime();
};

var clock = new Clock();
clock.run();
