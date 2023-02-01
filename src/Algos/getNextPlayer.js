function getNextPlayer(nextAction, game, definer) {
  const { defIdx, copyIdx, currentAction, currentDefinerId } = game;
  switch (nextAction) {
    case "redo":
    case "copy": {
      if (copyIdx + 1 === currentDefinerId || copyIdx + 1 === definer) {
        if (copyIdx + 2 >= game.totalPlayer - 1) {
          return definer === 0 ? 1 : 0;
        } else {
          return copyIdx + 2;
        }
      } else {
        if (currentAction === "def") {
          return definer === 0 ? 1 : 0;
        } else {
          return copyIdx + 1;
        }
      }
    }
    default: {
      if (defIdx === game.totalPlayer - 1) {
        return 0;
      } else {
        return defIdx + 1;
      }
    }
  }
}

export default getNextPlayer;
