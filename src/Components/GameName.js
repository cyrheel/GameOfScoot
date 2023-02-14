import React from "react";

function GameName({ gameName, setGameName }) {
  // TODO: Add warning game name can't be empty
  return (
    <>
      <p>Game Name :</p>
      <p>Gonna be "Game of {gameName}"</p>
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
