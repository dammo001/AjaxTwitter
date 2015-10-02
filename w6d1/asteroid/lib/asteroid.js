(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Asteroid = window.Asteroids.Asteroid = function (opts) {
    var attributes = {
      pos: opts['pos'],
      game: opts['game'],
      color: Asteroid.COLOR,
      radius: Asteroid.RADIUS,
      vel: window.Asteroids.Util.randomVec(2)
    };

    window.Asteroids.movingObject.call(this, attributes);
  };

  window.Asteroids.Util.inherits(Asteroid, window.Asteroids.movingObject);

  Asteroid.COLOR = 'red';
  Asteroid.RADIUS = 25;

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof window.Asteroids.Ship) {
      otherObject.relocate();
    }
  };

  Asteroid.prototype.draw = function(ctx) {
    var grad = ctx.createLinearGradient(0,0,800,0);
    grad.addColorStop(0, "red");
    grad.addColorStop(0.2, "orange");
    grad.addColorStop(0.3, "yellow");
    grad.addColorStop(0.5, "green");
    grad.addColorStop(0.6, "blue");
    grad.addColorStop(0.7, "indigo");
    grad.addColorStop(1, "violet");
    ctx.fillStyle = grad;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.closePath();

    ctx.fill();

    ctx.stroke();
  };


})();
