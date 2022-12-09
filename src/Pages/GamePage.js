import React, { useContext } from "react";
import PlayersContext from "../context/PlayerContext";

function GamePage() {
  const { players } = useContext(PlayersContext);
  return (
    <div>
      {players.map((p, i) => {
        return (
          <div key={i}>
            <p>{p.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GamePage;
