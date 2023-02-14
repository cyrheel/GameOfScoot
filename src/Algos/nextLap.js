import incrementLap from "./incrementLap.js";
import manageLetters from "./manageLetters.js";
import manageStatus from "./manageStatus.js";
import manageTry from "./manageTry.js";
import getDefiner from "./getDefiner.js";
import getNextAction from "./getNextAction.js";
import getNextPlayer from "./getNextPlayer.js";

// META, Manage the current lap and set game and players for the next lap
function nextLap(game, setGame, players, setPlayers, currResponse) {
  // Game
  const definer = getDefiner(game, currResponse);
  const nextAction = getNextAction(players, game, currResponse);
  const idx = getNextPlayer(nextAction, game, definer, players);

  const nextGameOptions = {
    ...game,
    ...(nextAction === "def" ? { defIdx: idx } : { copyIdx: idx }),
    currentPlayerId: idx,
    currentAction: nextAction,
    ...(definer !== null && { currentDefinerId: definer }),
  };

  // Players
  const tryedPlayers = manageTry(game, players, currResponse);
  const statuedPlayers = manageStatus(players, game, definer, currResponse);
  const letteredPlayers = manageLetters(players, game, currResponse);

  const nextPlayers = players.map((p, i) => {
    return {
      ...p,
      try: tryedPlayers[i].try,
      isActive: statuedPlayers[i].isActive,
      letter: letteredPlayers[i].letter,
    };
  });

  // Set next lap
  setPlayers(nextPlayers);
  setGame(incrementLap(nextGameOptions));
}

export default nextLap;
