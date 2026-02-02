import { winningPatterns } from "./winningPatterns";

export function getAIMove(board) {
    const emptyCells = board
      .map((value, index) => value === null ? index : null)
      .filter(index => index !== null);

    if (emptyCells.length === 0) return null;

    const winningMove = findWinningMove(board, "O");
    if (winningMove !== null) return winningMove;

    const blockingMove = findWinningMove(board, "X");
    if (blockingMove !== null) return blockingMove;

    if (board[4] === null) return 4;

    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
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
