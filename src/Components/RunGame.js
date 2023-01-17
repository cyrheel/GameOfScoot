import React, { useContext, useEffect } from "react";
import style from "styled-components";

import nextLap from "../Algos/nextLap";
import PlayerContext from "../Context/PlayerContext";
import RulesContext from "../Context/RulesContext";
import GameContext from "../Context/GameContext";

import Actions from "./Actions";

// Const
const GameContainer = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const LapInfos = style.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const BtnContainer = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

// Component
function RunGame() {
  const { game, setGame } = useContext(GameContext);
  const { players, setPlayers } = useContext(PlayerContext);
  const { rules } = useContext(RulesContext);

  // TODO: remove this sh*t
  // useEffect(() => {
  //   if (game.currentAction === "def" && game.currentPlayer?.hasDef) {
  //     setGame({
  //       ...game,
  //       currentPlayerId: game.currentPlayerId + 1,
  //       currentPlayer: players[game.currentPlayerId + 1],
  //     });
  //   }
  // }, [game, players, setGame]);

  useEffect(() => {
    for (const player of players) {
      if (player.letter === rules.targetWord) {
        setGame({ ...game, isRunning: false });
      }
    }
  }, [game, players, rules.targetWord, setGame]);

  if (!game.isRunning) {
    return <p id="endGame">End Game :/</p>;
  }
  return (
    <GameContainer>
      <LapInfos>
        <p id="currentlap">Tour n°{game.lap}</p>
        <p id="currentplayer">C'est le tour de {game.currentPlayer?.name}</p>
      </LapInfos>
      <Actions />
      <BtnContainer>
        <button
          id="YES"
          onClick={() =>
            nextLap(game, setGame, players, setPlayers, rules, true)
          }
          style={{ width: "50%" }}
        >
          Oui
        </button>
        <button
          id="NO"
          onClick={() =>
            nextLap(game, setGame, players, setPlayers, rules, false)
          }
          style={{ width: "50%" }}
        >
          Non
        </button>
      </BtnContainer>
    </GameContainer>
  );
}
export default RunGame;
