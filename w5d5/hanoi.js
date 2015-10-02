var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var TowersOfHanoi = function() {
  this.towers = [[3,2,1], [], []];
};

TowersOfHanoi.prototype.isWon = function (){
  if(this.towers[1].length === 3 || this.towers[2].length === 3){
    return true;
  }
  else {
    return false;
  }
};

TowersOfHanoi.prototype.isValidMove = function(startTowerIdx, toTowerIdx) {
  if(this.towers[startTowerIdx][0] && this.validMove(startTowerIdx, toTowerIdx)){
    this.towers[toTowerIdx].push(this.towers[startTowerIdx].pop());
  }
};

TowersOfHanoi.prototype.validMove = function(startTowerIdx, toTowerIdx){
  if(this.towers[toTowerIdx].length === 0){
    return true;
  }

  if(this.towers[startTowerIdx][this.towers[startTowerIdx].length-1] < this.towers[toTowerIdx][0]){
    return true;
  }
  else {
    return false;
  }
};

TowersOfHanoi.prototype.print = function(){
  console.log(this.towers);
};

TowersOfHanoi.prototype.prompt = function (validMoveCallback) {
  var that = this;
  this.print();
  reader.question("Select from tower: ", function (response1) {
    reader.question("Select to tower: ", function (response2) {
      var fromIdx = parseInt(response1);
      var toIdx = parseInt(response2);
      validMoveCallback = validMoveCallback.bind(that, fromIdx, toIdx);
      validMoveCallback();
      that.run(that.winnerMessage);
    });
  });
};

TowersOfHanoi.prototype.run = function (completionCallback) {
  if ( this.isWon() ) {
    completionCallback();
  } else {
    this.prompt(this.isValidMove);
  }
};

TowersOfHanoi.prototype.winnerMessage = function () {
  console.log("Congratulations, you won!");
  reader.close();
};

var game = new TowersOfHanoi();
game.run(function() { game.winnerMessage(); });
