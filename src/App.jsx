import Board from "./components/Board";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-3xl bg-gray-800/80 backdrop-blur border border-gray-700 shadow-2xl p-8 flex flex-col items-center gap-6">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Tic Tac <span className="text-indigo-400">∞</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-400 text-center">
          Each player can have only 3 active moves
        </p>

        {/* Board */}
        <Board />
        <span className="text-xs text-gray-500 mt-4">
          &copy; 2026 Mohammad Laraib. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default App;
