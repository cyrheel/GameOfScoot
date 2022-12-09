import React, { useContext } from "react";
import GameContext from "../Context/GameContext";

function Question({ incr, players, questionType }) {
  const { game, setGame } = useContext(GameContext);
  if (game.questionType === "copy") {
    return <p>Le tricks a-t-il été copié ?</p>;
  }
  if (game.questionType === "redo") {
    return <p>Voulez vous utilisé votre pute ?</p>;
  }
  return <p>Le tricks a-t-il été définit ?</p>;
}

export default Question;
