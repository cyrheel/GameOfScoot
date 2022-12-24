import checkForHasDef from "./checkForHasDef";
import lastToPlay from "./lastToPlay";

function managePlayersStatus(
  currAction,
  currResponse,
  players,
  setPlayers,
  currPlayerId,
  game
) {
  switch (currAction) {
    case "redo":
    case "copy": {
      // if everyone is not active except curr player set everyone to isActive True
      // else set isActive false for currPlayer
      if (lastToPlay(players, game)) {
        const nextPlayers = players.map((p) => ({ ...p, isActive: true }));
        setPlayers(nextPlayers);
        return nextPlayers;
      } else {
        const nextPlayers = players.map((p, i) => {
          if (i === currPlayerId) {
            return {
              ...p,
              isActive: false,
            };
          }
          return p;
        });
        setPlayers(nextPlayers);
        return nextPlayers;
      }
    }
    default: {
      // if everyone have already define a tricks except curr player set everyone to hasDef False
      // else set HasDef True for curr player
      if (checkForHasDef(players, game)) {
        const nextPlayers = players.map((p) => ({ ...p, hasDef: false }));
        setPlayers(nextPlayers);
        return nextPlayers;
      } else {
        const nextPlayers = players.map((p, i) => {
          if (i === currPlayerId) {
            return {
              ...p,
              hasDef: true,
            };
          }
          return p;
        });
        setPlayers(nextPlayers);
        return nextPlayers;
      }
    }
  }
}

export default managePlayersStatus;
