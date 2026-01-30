const Cell = ({ value, onClick, isWinningCell }) => {
  return (
    <button
      disabled={Boolean(isWinningCell)}
      onClick={onClick}
      className={`
  relative z-10
  bg-slate-800 h-20 w-20 sm:h-24 sm:w-24
  rounded-xl
  border
  flex items-center justify-center
  text-4xl font-extrabold
  transition-all duration-200
  active:scale-95
  ${
    isWinningCell
      ? "bg-emerald-500/20 border-emerald-400 scale-110 shadow-lg"
      : "border-gray-600 hover:bg-gray-900 hover:scale-105"
  }

  ${value === "X" ? "text-cyan-400 border-cyan-400" : ""}
  ${value === "O" ? "text-fuchsia-400 border-fuchsia-400" : ""}
`}
    >
      {value}
    </button>
  );
};

export default Cell;
