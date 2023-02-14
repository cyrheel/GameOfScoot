import lastToPlay from "./lastToPlay.js";
import lastTry from "./lastTry.js";

function manageStatus(players, game, definer, currResponse) {
  // Currently, set every player who copy and have no more try to isActive false
  // Also manage to set definer to isActive false cause he don't have to copy his own trick
  let nextPlayers = players;
  if (definer !== null) {
    nextPlayers = nextPlayers.map((p, i) => {
      if (i === definer) {
        return { ...p, isActive: false };
      } else {
        return p;
      }
    });
  }
  if (
    (game.currentAction === "copy" && lastTry(nextPlayers, game)) ||
    (game.currentAction === "copy" && currResponse)
  ) {
    nextPlayers = nextPlayers.map((p, i) => {
      if (i === game.currentPlayerId) {
        return { ...p, isActive: false };
      } else {
        return p;
      }
    });
  }

  // if everyone is inactive then reset all to active
  if (players.length > 2) {
    if (lastToPlay(nextPlayers, game)) {
      nextPlayers = nextPlayers.map((p, i) => {
        return { ...p, isActive: true };
      });
    }
  }

  return nextPlayers;
}

export default manageStatus;
