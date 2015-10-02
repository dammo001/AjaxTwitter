(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = window.Asteroids.Bullet = function (opts) {
    var attributes = {
      game: opts['game'],
      pos: opts['pos'],
      vel: opts['vel'],
      radius: Bullet.RADIUS,
      color: Bullet.COLOR
    };

    window.Asteroids.movingObject.call(this, attributes);
  };

  window.Asteroids.Util.inherits(Bullet, window.Asteroids.movingObject);

  Bullet.RADIUS = 8;
  Bullet.COLOR = 'magenta';

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof window.Asteroids.Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

  Bullet.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.game.isOutOfBounds(this.pos) ||
            (this.vel[0] === 0 && this.vel[1] === 0)) {
      this.game.remove(this);
    }
  };

})();
