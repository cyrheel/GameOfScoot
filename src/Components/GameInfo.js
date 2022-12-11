import React, { useContext } from "react";
import style from "styled-components";

import PlayerContext from "../Context/PlayerContext";
import RulesContext from "../Context/RulesContext";

const GameInfoW = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const PlayerContainer = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80%;
  overflow: auto;
`;

const PlayerDiv = style.div`
  display: flex;
  width: 100%;
  justify-content: space-around; 
`;

function GameInfo() {
  const { players } = useContext(PlayerContext);
  const { rules } = useContext(RulesContext);
  return (
    <GameInfoW>
      <p>You are playing {rules.gameName}</p>
      <p>Score Board</p>
      <PlayerContainer>
        {players.map((p, i) => {
          return (
            <PlayerDiv key={i}>
              <p>{p.name}</p>
              <p>{p.letter === "" ? "No letters" : p.letter}</p>
              <p>isActive {p.isActive.toString()}</p>
              <p>hasDef {p.hasDef.toString()}</p>
            </PlayerDiv>
          );
        })}
      </PlayerContainer>
    </GameInfoW>
  );
}
export default GameInfo;
