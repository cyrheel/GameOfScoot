function setNextPlayer(nextAction, nextPlayers, game) {
  switch (nextAction) {
    case "redo":
    case "copy": {
      // the next isActive player that isn't currPlayer
      const playersWithoutCurr = nextPlayers.filter(
        (el) => el.name !== game.currentPlayer.name
      );
      for (const [idx, player] of playersWithoutCurr.entries()) {
        if (player.isActive) {
          return { nextCurrP: player, nextCurrId: idx };
        }
      }
      break;
    }
    default: {
      // the next !hasDef player
      for (const [idx, player] of nextPlayers.entries()) {
        if (!player.hasDef) {
          return { nextCurrP: player, nextCurrId: idx };
        }
      }
      break;
    }
  }
}

export default setNextPlayer;
