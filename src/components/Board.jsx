import Cell from "./Cell";
import { useState } from "react";
import { checkWinner } from "../utils/checkWinner";
import StrikeLine from "./StrikeLine";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (index) => {
    if (winner || board[index] !== null) return;
    const newBoard = [...board];
    newBoard[index] = isNext ? "X" : "O";
    const result = checkWinner(newBoard);
    setBoard(newBoard);
    if (result) {
      setWinner(result);
    } else if (newBoard.every((cell) => cell !== null)) {
      setIsDraw(true);
    } else {
      setIsNext((prev) => !prev);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsNext(true);
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <>
      <div className="mb-6 text-center text-xl font-semibold">
        {winner ? (
          <span className="text-emerald-400">🏆 Winner: {winner.winner}</span>
        ) : isDraw ? (
          <span className="text-amber-400">🤝 It's a Draw!</span>
        ) : (
          <span className={isNext ? "text-cyan-400" : "text-fuchsia-400"}>
            {isNext ? "X's Turn" : "O's Turn"}
          </span>
        )}
      </div>

      <div className="relative p-4 bg-gray-800 rounded-2xl shadow-2xl">
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
    bg-gradient-to-r from-indigo-600 to-purple-600
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
        New Game
      </button>
    </>
  );
};

export default Board;
