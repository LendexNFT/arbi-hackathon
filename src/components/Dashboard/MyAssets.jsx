import React from "react";

const buttonList = ["Swap orders", "Lend orders", "Borrow Orders"];

function MyAssets() {
  return (
    <div className="bg-slate-300 rounded-lg m-8 text-4xl px-8 py-4 flex items-center justify-between drop-shadow-lg">
      <div>MyAssets</div>
      <div className="flex justify-start items-center gap-8">
        {buttonList.map((item) => (
          <button
            type="button"
            className="bg-blue-400 rounded-lg px-8 py-2 text-white drop-shadow"
          >
            {item}
          </button>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default MyAssets;
