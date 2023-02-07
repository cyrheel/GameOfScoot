import incrementLap from "./incrementLap.js";
import manageLetters from "./manageLetters.js";
import manageStatus from "./manageStatus.js";
import getDefiner from "./getDefiner.js";
import getNextAction from "./getNextAction.js";
import getNextPlayer from "./getNextPlayer.js";

// META, Manage the current lap and set game and players for the next lap
function nextLap(game, setGame, players, setPlayers, currResponse) {
  // Game
  const definer = getDefiner(game, currResponse);
  const nextAction = getNextAction(players, game, currResponse);
  const idx = getNextPlayer(nextAction, game, definer, players.length);

  const nextGameOptions = {
    ...game,
    ...(nextAction === "def" ? { defIdx: idx } : { copyIdx: idx }),
    currentPlayerId: idx,
    currentAction: nextAction,
    ...(definer !== null && { currentDefinerId: definer }),
  };

  // Players
  const statuedPlayers = manageStatus(players, game, definer);
  const letteredStatuedPlayers = manageLetters(
    statuedPlayers,
    game,
    currResponse
  );

  // Set next lap
  setPlayers(letteredStatuedPlayers);
  setGame(incrementLap(nextGameOptions));
}

export default nextLap;
