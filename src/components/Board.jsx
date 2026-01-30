import Cell from "./Cell";
import { useState } from "react";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] !== null) return;
    const newBoard = [...board];
    newBoard[index] = isNext ? "X" : "O";

    setIsNext((prev) => !prev);
    setBoard(newBoard);
  };

  return (
    <>
      <div className="mb-4 text-center text-xl font-semibold">
        <span className={isNext ? "text-cyan-400" : "text-fuchsia-400"}>
          {isNext ? "X's Turn" : "O's Turn"}
        </span>
      </div>
      <div className="p-4 bg-gray-800 rounded-2xl shadow-2xl">
        <div className="grid grid-cols-3 gap-3">
          {board.map((value, index) => (
            <Cell
              key={index}
              value={value}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
