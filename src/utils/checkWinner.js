import { winningPatterns } from "./winningPatterns";

export function checkWinner(board) {
  for (let { line, strike } of winningPatterns) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return {
        winner: board[a],
        line: [a, b, c],
        strike: strike,
      };
    }
  }
  return null;
}
