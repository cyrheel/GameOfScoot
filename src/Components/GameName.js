import React from "react";

function GameName({ gameName, setGameName }) {
  return (
    <>
      <p>Game Name :</p>
      <input
        type="text"
        value={gameName}
        min={1}
        onChange={(e) => {
          setGameName(e.target.value.toUpperCase());
        }}
      ></input>
    </>
  );
}

export default GameName;
