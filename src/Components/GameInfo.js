import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import Translate from "./Translate.js";
import PlayerContext from "../Context/PlayerContext.js";
import GameContext from "../Context/GameContext.js";

const GameInfoW = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80%;
  overflow: auto;
`;
const PlayerDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const LetterAnimation = keyframes`{
  0% {
    transform: translate(1000px, -1000px) skew(-80deg, -10deg);
    transform-origin: 0% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) skew(0deg, 0deg);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
};
`;
const Letters = styled.p`
  user-select: none;
  color: #f4d35e;
  animation: ${LetterAnimation} 0.2s cubic-bezier(0.23, 1, 0.32, 1) both;
`;

function GameInfo() {
  const { players } = useContext(PlayerContext);
  const { game } = useContext(GameContext);
  return (
    <GameInfoW>
      <p style={{ color: "#FAF0CA", fontSize: "110%" }}>
        <Translate>Score Board for </Translate>
        Game of {game.targetWord}
      </p>
      <PlayerContainer>
        {players.map((p, i) => {
          return (
            <PlayerDiv key={i}>
              <p id={`name${i}`} style={{ color: "#FAF0CA" }}>
                {p.name}
              </p>
              <Letters id={`letter${i}`} key={p.letter + i}>
                {p.letter === "" ? "#" : p.letter}
              </Letters>
            </PlayerDiv>
          );
        })}
      </PlayerContainer>
    </GameInfoW>
  );
}
export default GameInfo;
