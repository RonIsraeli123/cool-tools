import { BOARD_LENGTH, WINNING_MARK_COUNT } from '../config';
import { GameStatus } from '../const/GameStatus';

export const play = (currentBoard, xIndex, yIndex, mark) => {
  playValidation(currentBoard, xIndex, yIndex, mark);
  currentBoard[xIndex][yIndex] = mark;
  checkGameStatus(currentBoard, mark);
};

const playValidation = (currentBoard, xIndex, yIndex, mark) => {
  if (currentBoard[xIndex][yIndex]) {
    throw new Error(`those[${xIndex}, ${yIndex}] coordinates are taken`);
  }
  if (0 > xIndex > BOARD_LENGTH || 0 > yIndex > BOARD_LENGTH) {
    throw new Error(`those[${xIndex}, ${yIndex}] coordinates are invalid`);
  }
};

const checkGameStatus = (currentBoard, mark) => {
  if (
    checkSlants(currentBoard) ||
    checkRows(currentBoard) ||
    checkColumns(currentBoard)
  ) {
    return GameStatus.WIN;
  }

  if (checkGameEnd(currentBoard)) {
    return GameStatus.DRAW;
  }

  return GameStatus.CONTINUE;
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
    return true;
  }
  if (WINNING_MARK_COUNT == counterSecondSlant) {
    return true;
  }
  return false;
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
      return true;
    }
  }
  return false;
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
      return true;
    }
  }
  return false;
};

const checkGameEnd = (currentBoard) => {
  for (let rows = 0; rows < array.length; rows++) {
    for (let column = 0; column < array.length; column++) {
      if (currentBoard[rows][column] == null) {
        return false;
      }
      return true;
    }
  }
};
