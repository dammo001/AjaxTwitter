var Board = function () {
  this.grid = [[null,null,null],[null,null,null],[null,null,null]];
};

Board.prototype.validMove = function(rowIdx, colIdx) {
  if ((rowIdx > 2 || colIdx > 2) || (rowIdx < 0 || colIdx < 0)) {
    return false;
  }

  if (this.grid[rowIdx][colIdx] === null) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.placeMark = function (mark, rowIdx, colIdx) {
  if (this.validMove(rowIdx,colIdx)){
    this.grid[rowIdx][colIdx] =  mark;
    return true;
  } else {
    console.log("Invalid move, please try again:");
    return false;
  }
};


Board.prototype.winner = function () {
  var mark = "x";
  if(this.checkHorizontal(mark) || this.checkVertical(mark) || this.checkDiagonal(mark)){
    return mark;
  }

  mark = "o";
  if(this.checkHorizontal(mark) || this.checkVertical(mark) || this.checkDiagonal(mark)){
    return mark;
  }

  return false;
};

Board.prototype.checkHorizontal = function(mark){
  for(var i = 0; i < this.grid.length; i++){
    for(var j = 0; j < this.grid.length; j++){
      if(this.grid[i][j] !== mark){
        break;
      }

      if(j === this.grid.length-1){
        return true;
      }
    }
  }
  return false;
};

Board.prototype.checkVertical = function(mark){
  for(var i = 0; i < this.grid.length; i++){
    for(var j = 0; j < this.grid.length; j++){
      if(this.grid[j][i] !== mark){
        break;
      }

      if(j === this.grid.length-1){
        return true;
      }
    }
  }
  return false;
};

Board.prototype.checkDiagonal = function(mark){
  for(var i = 0; i < this.grid.length; i++){
    if(this.grid[i][i] !== mark){
      break;
    }

    if(i === this.grid.length-1){
      return true;
    }
  }

  for(i = 0; i < this.grid.length; i++){
    if(this.grid[this.grid.length-1-i][i] !== mark){
      break;
    }

    if(i === this.grid.length-1){
      return true;
    }
  }

  return false;
};

Board.prototype.print = function() {
  for(var i = 0; i < this.grid.length; i++){
    console.log(this.grid[i]);
  }
};

Board.prototype.inStalemate = function () {
  for (var i=0; i < this.grid.length; i++) {
    for (var j=0; j < this.grid.length; j++ ){
      if ( this.grid[i][j] === null){
        return false;
      }
    }
  }
  return true;
};

module.exports = Board;
