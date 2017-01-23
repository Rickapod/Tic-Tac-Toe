var Prompt = require('prompt');

var player1 = 'Player One';
var player2 = 'Player Two';
var turn = player1;
var move;
var board = [['| |', '| |', '| |'], ['| |', '| |', '| |'], ['| |', '| |', '| |']];
// Prompt.start();
var round = 0;
var rungame = function() { 
  Prompt.get( [turn + ' move'], function(err, result) {
    if (err) { console.error(err); }
    var move = result[turn + ' move'];
    if (turn === player1) {
      board[move[1]][move[3]] = 'X';
    } 
    if (turn === player2) {
      board[move[1]][move[3]] = 'O';
    } 
    console.log(turn + ' moved ' + move);
    if (turn === player1) {
      turn = player2;
    } else { turn = player1; }
    round++;
  });
};
// while (test != 3) {

  console.log();
  console.log( "It's " + turn + "'s turn, enter a '[row,column]'");
  console.log();
  console.log("Current Board");
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
  console.log();
  rungame();

// }

