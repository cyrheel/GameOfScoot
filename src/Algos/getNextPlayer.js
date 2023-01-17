function getNextPlayer(nextAction, nextPlayers, game) {
  const { defIdx, copyIdx } = game;
  switch (nextAction) {
    case "redo":
    case "copy": {

      if (copyIdx === game.totalPlayer - 1) {
        return { player: nextPlayers[0], idx: 0 };
      } else {
        if (copyIdx === game.)
        return { player: nextPlayers[copyIdx + 1], idx: copyIdx + 1 };
      }
    }
    default: {
      if (defIdx === game.totalPlayer - 1) {
        return { player: nextPlayers[0], idx: 0 };
      } else {
        return { player: nextPlayers[defIdx + 1], idx: defIdx + 1 };
      }
    }
  }
}

export default getNextPlayer;
