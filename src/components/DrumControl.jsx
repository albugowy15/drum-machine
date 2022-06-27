import React from "react";

export const DrumControl = ({
  stop,
  power,
  name,
  volume,
  handleVolumeChange,
  changeSoundsGroup,
}) => {
  return (
    <div className="grid grid-cols-1">
      <button
        className="bg-[#1B512D] px-2 py-1 rounded-md text-slate-200 hover:bg-opacity-80"
        onClick={stop}
      >
        Turn the Power: {power ? "OFF" : "ON"}
      </button>
      <h2 className="font-bold text-lg mx-auto m-2">
        Volume: {Math.round(volume * 100)}%
      </h2>
      <input
        max="1"
        min="0"
        step="0.01"
        type="range"
        value={volume}
        onChange={handleVolumeChange}
      />
      <h2 className="mx-auto font-bold text-xl my-3">{name}</h2>
      <button
        className="bg-[#1B512D] px-2 py-1 rounded-md text-slate-200 hover:bg-opacity-80"
        onClick={changeSoundsGroup}
      >
        Change Sounds Group
      </button>
    </div>
  );
};
