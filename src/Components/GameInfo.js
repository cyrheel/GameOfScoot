import React, { useContext } from "react";
import PlayerContext from "../Context/PlayerContext";
import RulesContext from "../Context/RulesContext";

function GameInfo() {
  const { players } = useContext(PlayerContext);
  const { rules } = useContext(RulesContext);
  return (
    <div>
      <p>{rules.gameName}</p>
      {players.map((p, i) => {
        return (
          <div key={i}>
            <p>{p.name}</p>
            <p>{p.letter === "" ? "No letters" : p.letter}</p>
          </div>
        );
      })}
    </div>
  );
}
export default GameInfo;
