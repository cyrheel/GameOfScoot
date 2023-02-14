import lastTry from "./lastTry.js";
import lastToPlay from "./lastToPlay.js";

function getNextPlayer(nextAction, game, definer, players) {
  // return the id of the next player
  const { defIdx, copyIdx, currentAction, currentDefinerId } = game;
  switch (nextAction) {
    case "copy": {
      if (lastToPlay(players, game) && lastTry(players, game)) {
        return definer === 0 ? 1 : 0;
      } else if (lastToPlay(players, game) && !lastTry(players, game)) {
        if (currentAction === "def") {
          return definer === 0 ? 1 : 0;
        } else {
          return copyIdx;
        }
      }
      if (copyIdx + 1 === currentDefinerId || copyIdx + 1 === definer) {
        if (definer || copyIdx + 2 > players.length - 1) {
          return definer === 0 || currentDefinerId === 0 ? 1 : 0;
        } else {
          return copyIdx + 2;
        }
      } else {
        if (currentAction === "def") {
          return definer === 0 ? 1 : 0;
        } else {
          if (!lastTry(players, game)) {
            return copyIdx;
          }
          return copyIdx + 1 > players.length - 1 ? 0 : copyIdx + 1;
        }
      }
    }
    default: {
      if (defIdx === players.length - 1) {
        return 0;
      } else {
        return defIdx + 1;
      }
    }
  }
}

export default getNextPlayer;
