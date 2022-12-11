import React, { useContext } from "react";
import style from "styled-components";

import GameContext from "../Context/GameContext";

const StyledP = style.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 125%;
`;

function Actions() {
  const { game } = useContext(GameContext);
  if (game.currentAction === "copy") {
    return <StyledP>Le tricks a-t-il été copié ?</StyledP>;
  }
  if (game.currentAction === "redo") {
    return <StyledP>Voulez vous utilisé votre pute ?</StyledP>;
  }
  return <StyledP>Le tricks a-t-il été définit ?</StyledP>;
}

export default Actions;
