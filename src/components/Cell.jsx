const Cell = ({ value, onClick }) => {
  const isX = value === "X";
  const isO = value === "O";

  return (
    <button
      onClick={onClick}
      className={`
        h-20 w-20 sm:h-24 sm:w-24
        rounded-xl
        border border-gray-600
        flex items-center justify-center
        text-4xl font-extrabold
        transition-all duration-200
        hover:scale-105 hover:bg-gray-900
        active:scale-95
        ${isX ? "text-cyan-400" : ""}
        ${isO ? "text-fuchsia-400" : ""}
        ${!value ? "text-transparent" : ""}
      `}
    >
      {value || ""}
    </button>
  );
};

export default Cell;
