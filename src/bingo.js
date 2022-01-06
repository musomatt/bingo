// Your job is to write a bingo scoring game.Your program should take a board as input in this format.

// 22 13 17 11 0
// 8 2 23 4 24
// 21 9 14 16 7
// 6 10 3 18 5
// 1 12 20 15 19

// it should also allow numbers to be called one by one.

//   eg:
// 7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1

// when a complete horizontal or vertical line is made, it should output Bingo!

const board = `22 13 17 11 0
8 2 23 4 24
21 9 14 16 7
6 10 3 18 5
1 12 20 15 19`;

const readBoard = (board) => {
  const rows = board.split('\n');

  return rows.map((row) => row.split(' '));
}

const isItCompletedYetM8 = (n) => {
  // loop through board looking for n
  board.forEach((row) => {
    row.map((square) => {
      return square === n ? 'x' : square;
    });
  });

  return false;
};

let boardResult = readBoard(board);

const updateBoard = (n) => {
  return boardResult.map(row => {
    return row.map(col => {
      return (col === n) ? 'x' :  n;
    })
  })
}

module.exports = {readBoard};
