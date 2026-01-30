const StrikeLine = ({ strike }) => {
  const base =
    "absolute bg-emerald-400 rounded-full transition-all duration-500";

  const styles = {
    "row-1": "top-[16%] left-0 w-full h-1 animate-x",
    "row-2": "top-[50%] left-0 w-full h-1 animate-x",
    "row-3": "top-[84%] left-0 w-full h-1 animate-x",

    "col-1": "left-[16%] top-0 h-full w-1 animate-y",
    "col-2": "left-[50%] top-0 h-full w-1 animate-y",
    "col-3": "left-[84%] top-0 h-full w-1 animate-y",

    "diag-1":
      "top-1/2 left-0 w-full h-1 rotate-45 animate-diag",
    "diag-2":
      "top-1/2 left-0 w-full h-1 -rotate-45 animate-diag",
  };

  return <div className={`${base} ${styles[strike]}`} />;
};

export default StrikeLine;
