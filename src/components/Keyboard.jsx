import React from "react";
import KeyboardKey from "./KeyboardKey";

const Keyboard = ({ power, play, sounds }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3">
      {power
        ? sounds.map((sound) => <KeyboardKey play={play} sound={sound} />)
        : sounds.map((sound) => (
            <KeyboardKey play={play} sound={{ ...sound, url: "#" }} />
          ))}
    </div>
  );
};

export default Keyboard;
