(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Ship = window.Asteroids.Ship = function (opts) {
    var attributes = {
      game: opts['game'],
      pos: opts['pos'],
      vel: [0, 0],
      radius: Ship.RADIUS,
      color: Ship.COLOR
    };
    window.Asteroids.movingObject.call(this, attributes);
  };

  window.Asteroids.Util.inherits(Ship, window.Asteroids.movingObject);

  Ship.RADIUS = 30;
  Ship.COLOR = 'white';

  Ship.prototype.relocate = function () {
    this.pos = window.Asteroids.Game.randomPosition();
    this.vel = [0,0];
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    var bullet = new window.Asteroids.Bullet(
      {
        game: this.game,
        pos: this.pos,
        vel: this.vel.map(function(el) { return el * 4; })
      }
    );
    this.game.bullets.push(bullet);
  };

  Ship.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = 'black';
    // ctx.beginPath();
    // ctx.arc(
    //   this.pos[0],
    //   this.pos[1],
    //   this.radius,
    //   0,
    //   2 * Math.PI,
    //   false
    // );
    // ctx.closePath();
    var normalizer = Math.sqrt(this.vel[0]*this.vel[0] + this.vel[1]*this.vel[1]);
    var normVel = [this.vel[0] / normalizer, this.vel[1] / normalizer];
    var slope = -(this.vel[1] / this.vel[0]);

    var scale = Math.tan(slope);
    var norm = -1/slope;
    var theta = Math.atan(this.vel[1]/this.vel[0]);

    if (this.vel[0] === 0 || this.vel[1] === 0) {
      var normVel = [1,1];
      // var slope =
    }

    var newPos = [this.pos[0] - this.radius*normVel[0], this.pos[1] - this.radius*normVel[1]];
    // debugger;
    ctx.beginPath();
    // console.log(slope);
    // console.log(newPos);

    ctx.moveTo(this.pos[0], this.pos[1]);
    // ctx.lineTo(newPos[0] + (this.radius/slope), newPos[1] + (this.radius));

    // yours
    ctx.lineTo(newPos[0] + (this.radius), newPos[1] + (this.radius/slope));
    ctx.lineTo(newPos[0] - (this.radius), newPos[1] - (this.radius/slope));
    // 
    // ctx.lineTo(newPos[0] + (norm*Math.cos[theta]), newPos[1] + (norm*Math.sin[theta]));
    // ctx.lineTo(newPos[0] - (norm*Math.cos[theta]), newPos[1] - (norm*Math.sin[theta]));
    // ctx.lineTo(newPos[0] - (this.radius/slope), newPos[1] - (this.radius));

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  };
})();
