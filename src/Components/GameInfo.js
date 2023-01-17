import React, { useContext } from "react";
import style from "styled-components";

import PlayerContext from "../Context/PlayerContext";
import RulesContext from "../Context/RulesContext";
import GameContext from "../Context/GameContext";

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
  const { game } = useContext(GameContext);
  return (
    <>
      <GameInfoW>
        <p>You are playing {rules.gameName}</p>
        <p>Score Board</p>
        <PlayerContainer>
          {players.map((p, i) => {
            return (
              <PlayerDiv key={i}>
                <p id={`name${i}`}>{p.name}</p>
                <p id={`letter${i}`}>
                  {p.letter === "" ? "No letters" : p.letter}
                </p>
                <p id={`isActive${i}`}>isActive {p.isActive.toString()}</p>
                <p id={`hasDef${i}`}>hasDef {p.hasDef.toString()}</p>
              </PlayerDiv>
            );
          })}
        </PlayerContainer>
      </GameInfoW>
      <div style={{ display: "flex" }}>
        <p>{game.currentPlayerId}</p>
        <p>{game.currentPlayer?.name}</p>
        <p>{game.currentAction}</p>
      </div>
    </>
  );
}
export default GameInfo;
