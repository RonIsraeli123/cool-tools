import { BOARD_LENGTH, WINNING_MARK_COUNT } from '../config';

export const play = (currentBoard, xIndex, yIndex, mark) => {
  playValidation(currentBoard, xIndex, yIndex, mark);
  currentBoard[xIndex][yIndex] = mark;
  checkGameStatus(currentBoard);
};

const playValidation = (currentBoard, xIndex, yIndex, mark) => {
  if (currentBoard[xIndex][yIndex]) {
    throw new Error(`those[${xIndex}, ${yIndex}] coordinates are taken`);
  }
};

const checkGameStatus = (currentBoard) => {
  checkSlants(currentBoard);
  checkRows(currentBoard);
  checkColumns(currentBoard);
};

const checkSlants = (currentBoard) => {
  const start_row_board_value = currentBoard[0][0];
  const end_row_board_value = currentBoard[0][BOARD_LENGTH - 1];
  let counterFirstSlant = 0;
  let counterSecondSlant = 0;
  let x = 0;
  let y = BOARD_LENGTH - 1;

  for (let i = 0; i < BOARD_LENGTH - 1; i++) {
    // FIRST SLANT
    if (start_row_board_value == currentBoard[i][i]) counterFirstSlant += 1;

    // SECOND SLANT
    if (end_row_board_value == currentBoard[x][y]) counterSecondSlant += 1;
    x++;
    y--;
  }

  if (WINNING_MARK_COUNT == counterFirstSlant) {
    return assignmentWin(firstInRow);
  }
  if (WINNING_MARK_COUNT == counterSecondSlant) {
    return assignmentWin(firstInRow);
  }
};

const checkRows = (currentBoard) => {
  let counterInLine = 0;
  for (let rowIndex = 0; rowIndex < BOARD_LENGTH - 1; rowIndex++) {
    const firstInRow = currentBoard[rowIndex][0];
    counterInLine = 0;
    for (let columnIndex = 0; columnIndex < BOARD_LENGTH - 1; columnIndex++) {
      if (firstInRow == currentBoard[rowIndex][columnIndex]) counterInLine++;
    }
    if (WINNING_MARK_COUNT == counterInLine) {
      return assignmentWin(firstInRow);
    }
  }
};

const checkColumns = (currentBoard) => {
  let counterInLine = 0;
  for (let columnIndex = 0; columnIndex < BOARD_LENGTH - 1; columnIndex++) {
    const firstInColumn = currentBoard[0][columnIndex];
    counterInLine = 0;
    for (let rowIndex = 0; rowIndex < BOARD_LENGTH - 1; rowIndex++) {
      if (firstInColumn == currentBoard[rowIndex][columnIndex]) counterInLine++;
    }
    if (WINNING_MARK_COUNT == counterInLine) {
      return assignmentWin(firstInColumn);
    }
  }
};

const assignmentWin = (mark) => {
  return {
    status: 'Win',
    mark: mark,
  };
};
