import React, { useContext, useEffect } from "react";
import style from "styled-components";

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

// Funcs
function incrementLap(game, players) {
  if (game.currentPlayerId === game.totalPlayer - 1) {
    return {
      ...game,
      lap: game.lap + 1,
      currentPlayerId: 0,
      currentPlayer: players[0],
    };
  } else {
    if (game.currentAction === "copy" && !checkForActive(players, game)) {
      return {
        ...game,
        currentPlayerId: 0,
        currentPlayer: players[game.currentPlayerId + 1],
      };
    }
    return {
      ...game,
      lap: game.lap + 1,
      currentPlayerId: game.currentPlayerId + 1,
      currentPlayer: players[game.currentPlayerId + 1],
    };
  }
}
function checkForActive(players, game) {
  for (const player of players) {
    if (player.isActive && player.name !== game.currentPlayer.name) {
      return true;
    }
  }
  return false;
}
function checkForHasNotDef(players, game) {
  for (const player of players) {
    if (!player.hasDef && player.name !== game.currentPlayer.name) {
      return true;
    }
  }
  return false;
}
function nextLap(game, setGame, players, setPlayers, rules, currentResponse) {
  switch (game.currentAction) {
    case "copy": {
      if (currentResponse) {
        if (checkForActive(players, game)) {
          const nextOptions = incrementLap(game, players);
          const nextPlayers = players.map((p, i) => {
            if (i === game.currentPlayerId) {
              return {
                ...p,
                isActive: false,
              };
            }
            return p;
          });
          setGame({ ...nextOptions });
          setPlayers(nextPlayers);
          break;
        } else {
          const nextOptions = incrementLap(
            { ...game, currentAction: "def" },
            players
          );
          const nextPlayers = players.map((p, i) => {
            return { ...p, isActive: true };
          });
          setGame(nextOptions);
          setPlayers(nextPlayers);
          break;
        }
      } else {
        if (checkForActive(players, game)) {
          const nextPlayers = players.map((p, i) => {
            if (i === game.currentPlayerId) {
              return {
                ...p,
                letter:
                  game.currentPlayer.letter +
                  rules.targetWord[game.currentPlayer.letter.length],
                isActive: false,
              };
            }
            return p;
          });
          setPlayers(nextPlayers);
          setGame(incrementLap({ ...game }, players));
          break;
        } else {
          const nextPlayers = players.map((p, i) => {
            if (i === game.currentPlayerId) {
              return {
                ...p,
                letter:
                  game.currentPlayer.letter +
                  rules.targetWord[game.currentPlayer.letter.length],
                isActive: true,
              };
            }
            return { ...p, isActive: true };
          });
          setPlayers(nextPlayers);
          setGame(incrementLap({ ...game, currentAction: "def" }, players));
          break;
        }
      }
    }
    case "redo": {
      break;
    }
    default: {
      if (currentResponse) {
        const nextGameOptions = incrementLap(
          {
            ...game,
            currentAction: "copy",
          },
          players
        );
        const nextPlayers = players.map((p, i) => {
          if (i === game.currentPlayerId) {
            return {
              ...p,
              isActive: false,
              hasDef: true,
            };
          }
          return p;
        });
        setPlayers(nextPlayers);
        setGame(nextGameOptions);
        break;
      } else {
        // if last to def, reset all to hasdef false
        if (checkForHasNotDef(players, game)) {
          const nextPlayers = players.map((p) => {
            return { ...p, hasDef: false };
          });
          setPlayers(nextPlayers);
          setGame(incrementLap(game, players));
          break;
        } else {
          setGame(incrementLap(game, players));
          break;
        }
      }
    }
  }
}

// Component
function RunGame() {
  const { game, setGame } = useContext(GameContext);
  const { players, setPlayers } = useContext(PlayerContext);
  const { rules } = useContext(RulesContext);

  useEffect(() => {
    if (game.currentAction === "def" && game.currentPlayer?.hasDef) {
      setGame({
        ...game,
        currentPlayerId: game.currentPlayerId + 1,
        currentPlayer: players[game.currentPlayerId + 1],
      });
    }
  }, [game, players, setGame]);

  if (game.currentPlayer?.letter === rules.targetWord) {
    return <p>End Game :/</p>;
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
