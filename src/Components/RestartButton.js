import React, { useContext } from "react";
import styled from "styled-components";

import PlayersContext, { initialPlayers } from "../Context/PlayerContext.js";
import GameContext, { initialGame } from "../Context/GameContext.js";
import SVG from "../Images/arrow-counterclockwise.svg";

const SVGContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background: #f4d35e;
`;

function RestartButton() {
  const { players, setPlayers } = useContext(PlayersContext);
  const { setGame } = useContext(GameContext);
  return (
    <SVGContainer
      id="restartgame"
      onClick={() => {
        const nextPlayers = players.map((p, i) => {
          return {
            ...initialPlayers.players[0],
            name: p.name,
            position: p.position,
          };
        });
        setPlayers(nextPlayers);
        setGame({
          ...initialGame.game,
          isRunning: true,
        });
      }}
    >
      <img src={SVG} alt="SVG" />
    </SVGContainer>
  );
}

export default RestartButton;
