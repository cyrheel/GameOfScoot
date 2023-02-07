import React, { useContext } from "react";
import style from "styled-components";

import PlayerContext from "../Context/PlayerContext.js";
import GameContext from "../Context/GameContext.js";

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
  const { game } = useContext(GameContext);
  return (
    <>
      <GameInfoW>
        <p>You are playing Game of {game.targetWord}</p>
        <p>Score Board</p>
        <PlayerContainer>
          {players.map((p, i) => {
            return (
              <PlayerDiv key={i}>
                <p id={`name${i}`}>{p.name}</p>
                <p id={`letter${i}`}>
                  {p.letter === "" ? "No letters" : p.letter}
                </p>
              </PlayerDiv>
            );
          })}
        </PlayerContainer>
      </GameInfoW>
    </>
  );
}
export default GameInfo;
