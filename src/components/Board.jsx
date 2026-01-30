import Cell from "./Cell";
import { useState } from "react";
import { checkWinner } from "../utils/checkWinner";
import StrikeLine from "./StrikeLine";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [moveHistory, setMoveHistory] = useState({
    X: [],
    O: [],
  });

  const handleClick = (index) => {
    if (winner || board[index] !== null) return;

    const player = isNext ? "X" : "O";

    const newBoard = [...board];
    const newHistory = {
      ...moveHistory,
      [player]: [...moveHistory[player]],
    };

    if (newHistory[player].length === 3) {
      const oldestIndex = newHistory[player][0];
      newBoard[oldestIndex] = null;
      newHistory[player].shift();
    }

    newBoard[index] = player;
    newHistory[player].push(index);

    setBoard(newBoard);
    setMoveHistory(newHistory);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setIsNext((prev) => !prev);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsNext(true);
    setWinner(null);
    setMoveHistory({
      X: [],
      O: [],
    });
  };

  return (
    <>
      <div className="mb-6 text-center text-xl font-semibold">
        {winner ? (
          <span className="text-emerald-400">
            🏆 Player {winner.winner} Won!
          </span>
        ) : (
          <span className={isNext ? "text-cyan-400" : "text-fuchsia-400"}>
            {isNext ? "X's Turn" : "O's Turn"}
          </span>
        )}
      </div>

      <div
        className={`relative p-4 bg-gray-800 rounded-2xl shadow-2xl
    ${winner ? "pointer-events-none opacity-90" : ""}
  `}
      >
        {winner && <StrikeLine strike={winner.strike} />}
        <div className="grid grid-cols-3 gap-3">
          {board.map((value, index) => (
            <Cell
              key={index}
              value={value}
              onClick={() => handleClick(index)}
              isWinningCell={winner && winner.line.includes(index)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={resetGame}
        className="
    mt-8 w-full
    rounded-2xl
    bg-gradient-to-r from-cyan-600 to-fuchsia-500
    py-3
    font-bold
    text-white
    tracking-wide
    shadow-lg shadow-indigo-500/30
    transition-all
    hover:scale-[1.02]
    hover:shadow-indigo-500/50
    active:scale-95
  "
      >
        Start New Game
      </button>
      <div className="mt-8 rounded-xl border border-gray-600/30 bg-gray-700/40 p-5 text-xs text-gray-400">
        <h3 className="mb-3 text-lg font-bold text-white">Game Rules:</h3>
        <ul className="space-y-2 leading-relaxed">
          <li>
            • Each player can only have a maximum of 3 pieces on the board at
            any given time.
          </li>
          <li>
            • After placing 3 pieces, your oldest piece will disappear when you
            place a new one.
          </li>
          <li>
            • The first player to get 3 of their pieces in a row (horizontally,
            vertically, or diagonally) wins!
          </li>
        </ul>
      </div>
    </>
  );
};

export default Board;
