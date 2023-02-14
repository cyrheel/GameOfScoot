import lastTry from "./lastTry.js";

function manageTry(game, players, currResponse) {
  if (game.currentAction === "def") {
    return players;
  } else {
    if (currResponse || lastTry(players, game)) {
      const nextPlayers = players.map((p, i) => {
        if (game.currentPlayerId === i) {
          return { ...p, try: 0 };
        } else {
          return p;
        }
      });
      return nextPlayers;
    } else {
      const nextPlayers = players.map((p, i) => {
        if (game.currentPlayerId === i) {
          return { ...p, try: players[game.currentPlayerId].try + 1 };
        } else {
          return p;
        }
      });
      return nextPlayers;
    }
  }
}

export default manageTry;
