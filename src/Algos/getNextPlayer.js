function getNextPlayer(nextAction, nextPlayers, game, definer) {
  const { defIdx, copyIdx, currentPlayerId } = game;
  switch (nextAction) {
    case "redo":
    case "copy": {
      if (copyIdx === game.totalPlayer - 1) {
        return { player: nextPlayers[0], idx: 0 };
      } else {
        // if current is definer do +2 and if +2 is no one do firstone etc
        if (definer && definer === currentPlayerId) {
          if (copyIdx + 2 >= game.totalPlayer - 1) {
            return { player: nextPlayers[0], idx: 0 };
          } else {
            return { player: nextPlayers[copyIdx + 2], idx: copyIdx + 2 };
          }
        } else {
          return { player: nextPlayers[copyIdx + 1], idx: copyIdx + 1 };
        }
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
