function getNextAction(players, game, currResponse) {
  switch (game.currentAction) {
    case "redo":
    case "copy": {
      // If there still someone active stay on copy else go back to define
      if (game.copyIdx >= players.length - 1) {
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
