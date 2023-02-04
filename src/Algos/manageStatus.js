function manageStatus(players, game, definer) {
  if (game.currentAction === "copy") {
    let nextPlayers;
    if (definer) {
      nextPlayers = players.map((p, i) => {
        if (i === definer) {
          return { ...p, isActive: false };
        } else {
          return p;
        }
      });
    }

    nextPlayers = nextPlayers.map((p, i) => {
      if (i === game.currentPlayerId) {
        return { ...p, isActive: false };
      } else {
        return p;
      }
    });
    return nextPlayers;
  }
}

export default manageStatus;
