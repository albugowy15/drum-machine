import React, { useEffect } from "react";

const KeyboardKey = ({ play, sound: { id, keyTrigger, url, keyCode } }) => {
  const handleKeydown = (e) => {
    if (e.keyCode === keyCode) {
      play(keyTrigger, id);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);

  return (
    <button
      className="border shadow-lg border-black p-5 rounded bg-[#73E2A7] hover:shadow-none hover:bg-opacity-70"
      onClick={() => play(keyTrigger, id)}
    >
      <audio id={keyTrigger} src={url} />
      {keyTrigger}
    </button>
  );
};

export default KeyboardKey;
