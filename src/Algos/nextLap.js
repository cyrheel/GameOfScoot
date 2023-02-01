import incrementLap from "./incrementLap.js";
import manageLetters from "./manageLetters.js";
import getDefiner from "./getDefiner.js";
import getNextAction from "./getNextAction.js";
import getNextPlayer from "./getNextPlayer.js";

function nextLap(game, setGame, players, setPlayers, rules, currResponse) {
  const letteredPlayers = manageLetters(players, game, rules, currResponse);

  const definer = getDefiner(game, currResponse);
  const nextAction = getNextAction(
    game.currentAction,
    currResponse,
    players,
    game
  );
  const idx = getNextPlayer(nextAction, game, definer);

  const nextGameOptions = {
    ...game,
    ...(nextAction === "def" ? { defIdx: idx } : { copyIdx: idx }),
    currentPlayerId: idx,
    currentAction: nextAction,
    ...(definer !== null && { currentDefinerId: definer }),
  };

  setPlayers(letteredPlayers);
  setGame(incrementLap(nextGameOptions));
}

export default nextLap;
