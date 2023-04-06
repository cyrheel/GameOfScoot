import React, { useContext } from "react";
import style from "styled-components";

import PlayerContext from "../Context/PlayerContext.js";
import GameContext from "../Context/GameContext.js";

const GameInfoW = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <p style={{ color: "#FAF0CA", fontSize: "110%" }}>
          Score Board for Game of {game.targetWord}
        </p>
        <PlayerContainer>
          {players.map((p, i) => {
            return (
              <PlayerDiv key={i}>
                <p id={`name${i}`} style={{ color: "#FAF0CA" }}>
                  {p.name}
                </p>
                <p
                  id={`letter${i}`}
                  style={{
                    color: "#F4D35E",
                    fontFamily: "'Nabla', cursive",
                  }}
                >
                  {p.letter === "" ? "#" : p.letter}
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
