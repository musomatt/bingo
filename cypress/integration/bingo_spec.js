const {readBoard} = require ('../../src/bingo');

it('can read a board', () => {
  const board = `60 69
420 180`;
  const output = readBoard(board);
  const expectedOutput = [['60', '69'],['420','180']];

  expect(output).to.deep.equal(expectedOutput)
});
