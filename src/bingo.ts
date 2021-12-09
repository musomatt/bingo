const board = [
  [22, 13, 17, 11, 0],
  [8, 2, 23, 4, 24],
  [21, 9, 14, 16, 7],
  [6, 10, 3, 18, 5],
  [1, 12, 20, 15, 19],
];

const isItCompletedYetM8 = (n: number): boolean => {
  // loop through board looking for n
  board.forEach((row: number[]) => {
    row.map((square: number) => {
      return square === n ? 'x' : square;
    });
  });

  return false;
};
