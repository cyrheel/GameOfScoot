import incrementLap from "./incrementLap";
import manageLetters from "./manageLetters";
import managePlayersStatus from "./managePlayersStatus";
import getNextAction from "./getNextAction";
import getNextPlayer from "./getNextPlayer";

function nextLap(game, setGame, players, setPlayers, rules, currResponse) {
  const nextPlayersStatued = managePlayersStatus(
    game.currentAction,
    currResponse,
    players,
    game.currentPlayerId,
    game
  );
  const letteredPlayers = manageLetters(
    game.currentAction,
    currResponse,
    game.currentPlayerId,
    nextPlayersStatued,
    game,
    rules
  );

  const nextAction = getNextAction(
    game.currentAction,
    currResponse,
    players,
    game
  );
  const { player, idx } = getNextPlayer(nextAction, letteredPlayers, game);
  const nextGameOptions = {
    ...game,
    ...(nextAction === "def" ? { defIdx: idx } : { copyIdx: idx }),
    currentPlayer: player,
    currentPlayerId: idx,
    currentAction: nextAction,
  };

  setPlayers(letteredPlayers);
  setGame(incrementLap(nextGameOptions));
}

export default nextLap;
