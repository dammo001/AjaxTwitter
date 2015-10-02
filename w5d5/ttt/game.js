var Board = require("./board");

var Game = function(reader){
  this.reader = reader;
  this.board = new Board();
  this.players = ["x", "o"];
};

Game.prototype.run = function(validMove, winCb){
  if (this.board.inStalemate()){
    this.board.print();
    console.log("Game Over. Stalement");
    this.reader.close();
    return;
  }
  if(!this.board.winner()){
    if(validMove){
      this.switchPlayers();
    }
    this.playTurn(this.board.placeMark);
  } else {
    winCb();
  }
};

Game.prototype.switchPlayers = function(){
  this.players.push(this.players.shift());
};

Game.prototype.playTurn = function (placeMarkCb) {
  this.board.print();
  console.log(this.players[0] + "'s turn");
  var that = this;
  this.reader.question("Enter row pos: ", function (rowIdx) {
    that.reader.question("Enter col pos: ", function (colIdx) {
      var rowPos = parseInt(rowIdx);
      var colPos = parseInt(colIdx);
      placeMarkCb = placeMarkCb.bind(that.board, that.players[0], rowIdx, colIdx);
      var valid = placeMarkCb();
      // placeMarkCb(that.players[0], rowPos, colPos);
      that.run(valid, function() { that.winnerMessage(); });
    });
  });
};

Game.prototype.winnerMessage = function () {
  this.board.print();
  console.log("Congrats " + this.players[0] + "!");
  this.reader.close();
};

module.exports = Game;
