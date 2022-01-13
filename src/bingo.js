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

const bingo = (inputNumbers, inputBoard) => {
  const board = readBoard(inputBoard);
  const input = inputNumbers.split(',').map(number => number.trim());
  console.log(input);
  let updatedBoard = board;
  for(const inputNumber of input){
    console.log(inputNumber);
    updatedBoard = markNumber(inputNumber, updatedBoard);
    console.log(updatedBoard);
    checkedBoard = checkBoard(updatedBoard);
  }
}

const checkBoard = (board) => {
  board.forEach(row => {
    const numberOfX = row.filter(number => number === 'x')
    if(numberOfX.length === 5){
      console.log('Bingo!');
      return;
    }
  })

  for(let row = 0; row < board.length; row++){
    for(let col = 0; col < board[row].length; col++){
      const value = board[col][row];
    }
  }
}

const readBoard = (board) => {
  const rows = board.split('\n');
  return rows.map((row) => row.split(' '));
}

const markNumber = (number, board) => {
  return board.map((row) => {
    return row.map((square) => {
      return square === number ? 'x' : square;
    });
  });
};

const updateBoard = (n) => {
  return boardResult.map(row => {
    return row.map(col => {
      return (col === n) ? 'x' :  n;
    })
  })
}

const input = '7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1';

const board = `22 13 17 11 0
8 2 23 4 24
21 9 14 16 7
6 10 3 18 5
1 12 20 15 19`;

bingo(input, board);
module.exports = {readBoard};
