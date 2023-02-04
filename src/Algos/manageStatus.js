function manageStatus(players, game, definer) {
  // Currently, set every player who copy to isActive false
  // Also manage to set definer to isActive false cause he don't have to copy his own trick
  let nextPlayers = players;
  if (definer !== null) {
    nextPlayers = players.map((p, i) => {
      if (i === definer) {
        return { ...p, isActive: false };
      } else {
        return p;
      }
    });
  }
  if (game.currentAction === "copy") {
    nextPlayers = nextPlayers.map((p, i) => {
      if (i === game.currentPlayerId) {
        return { ...p, isActive: false };
      } else {
        return p;
      }
    });
  }
  return nextPlayers;
}

export default manageStatus;
