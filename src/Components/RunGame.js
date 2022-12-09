import React, { useContext, useState } from "react";

import PlayerContext from "../Context/PlayerContext";
import RulesContext from "../Context/RulesContext";
import GameContext from "../Context/GameContext";

import Question from "./Questions";

function definePlayerOrder(players) {
  const passageOrder = [];
  players.forEach(() => {
    passageOrder.push("");
  });
  players.forEach((player) => {
    passageOrder[player.position - 1] = player;
  });
  return passageOrder;
}

function RunGame() {
  const { game, setGame } = useContext(GameContext);
  const { players } = useContext(PlayerContext);
  const passageOrder = definePlayerOrder(players);

  return (
    <div key={game.lap}>
      <p></p>
      <p>C'est le tour de {passageOrder[game.lap].name}</p>
      <Question />
      <button
        onClick={() => {
          setGame({ ...game, lap: game.lap + 1, questionType: "copy" });
        }}
      >
        Oui
      </button>
      <button>Non</button>
    </div>
  );
}
export default RunGame;
