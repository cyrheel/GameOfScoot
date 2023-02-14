import React, { useContext } from "react";
import style from "styled-components";

import GameContext from "../Context/GameContext.js";
import PlayerContext from "../Context/PlayerContext.js";

const StyledP = style.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 125%;
`;

function Actions() {
  const { game } = useContext(GameContext);
  const { players } = useContext(PlayerContext);
  if (game.currentAction === "copy") {
    return (
      <StyledP id="copy">
        Le tricks imposé par {players[game.currentDefinerId].name} a-t-il été
        copié ?
      </StyledP>
    );
  }
  if (game.currentAction === "redo") {
    return <StyledP id="redo">Voulez vous utilisé votre pute ?</StyledP>;
  }
  return <StyledP id="def">Le tricks a-t-il été définit ?</StyledP>;
}

export default Actions;
