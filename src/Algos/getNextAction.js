import lastToPlay from "./lastToPlay.js";

function getNextAction(players, game, currResponse) {
  // return the next Action
  switch (game.currentAction) {
    case "redo":
    case "copy": {
      // If there still someone active stay on copy else go back to define
      if (lastToPlay(players, game)) {
        return "def";
      } else {
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
