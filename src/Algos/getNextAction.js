import lastToPlay from "./lastToPlay.js";
import lastTry from "./lastTry.js";

function getNextAction(players, game, currResponse) {
  // return the next Action
  switch (game.currentAction) {
    case "redo":
    case "copy": {
      if (lastTry(players, game)) {
        if (lastToPlay(players, game)) {
          return "def";
        } else {
          return "copy";
        }
      } else {
        if (currResponse && lastToPlay(players, game)) {
          return "def";
        }
        return "copy";
      }
    }
    default: {
      // When someone define a tricks everyone have to copy it
      if (currResponse) {
        return "copy";
      }
      return "def";
    }
  }
}

export default getNextAction;
