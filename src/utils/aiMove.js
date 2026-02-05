import { winningPatterns } from "./winningPatterns";

export function getAIMove(board) {
  const emptyCells = board
    .map((v, i) => (v === null ? i : null))
    .filter(i => i !== null);

  if (emptyCells.length === 0) return null;

  // 1. Win
  const win = findWinningMove(board, "O");
  if (win !== null) return win;

  // 2. Block
  const block = findWinningMove(board, "X");
  if (block !== null) return block;

  // 3. Create fork
  const fork = findForkMove(board, "O");
  if (fork !== null) return fork;

  // 4. Block fork
  const blockFork = findForkMove(board, "X");
  if (blockFork !== null) return blockFork;

  // 5. Take center
  if (board[4] === null) return 4;

  // 6. Take corner
  const corners = [0, 2, 6, 8].filter(i => board[i] === null);
  if (corners.length) return corners[Math.floor(Math.random() * corners.length)];

  // 7. Take edge
  const edges = [1, 3, 5, 7].filter(i => board[i] === null);
  return edges[Math.floor(Math.random() * edges.length)];
}

function findWinningMove(board, player) {
  for (let { line } of winningPatterns) {
    const [a, b, c] = line;
    const values = [board[a], board[b], board[c]];
    const playerCount = values.filter(v => v === player).length;
    const emptyCount = values.filter(v => v === null).length;

    if (playerCount === 2 && emptyCount === 1) {
      return line[values.indexOf(null)];
    }
  }
  return null;
}

function findForkMove(board, player) {
  const emptyCells = board
    .map((v, i) => (v === null ? i : null))
    .filter(i => i !== null);

  for (let index of emptyCells) {
    const testBoard = [...board];
    testBoard[index] = player;

    let winCount = 0;

    for (let { line } of winningPatterns) {
      const [a, b, c] = line;
      const values = [testBoard[a], testBoard[b], testBoard[c]];
      const playerCount = values.filter(v => v === player).length;
      const emptyCount = values.filter(v => v === null).length;

      if (playerCount === 2 && emptyCount === 1) {
        winCount++;
      }
    }

    if (winCount >= 2) return index;
  }

  return null;
}
