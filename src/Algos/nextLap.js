import incrementLap from "./incrementLap";
import manageLetters from "./manageLetters";
import managePlayersStatus from "./managePlayersStatus";
import setNextAction from "./setNextAction";
import setNextPlayer from "./setNextPlayer";

function nextLap(game, setGame, players, setPlayers, rules, currResponse) {
  manageLetters(
    game.currentAction,
    currResponse,
    game.currentPlayerId,
    players,
    setPlayers,
    game,
    rules
  );

  const nextPlayersWithStatus = managePlayersStatus(
    game.currentAction,
    currResponse,
    players,
    setPlayers,
    game.currentPlayerId,
    game
  );

  const nextAction = setNextAction(
    game.currentAction,
    currResponse,
    nextPlayersWithStatus,
    game
  );

  const nextPlayer = setNextPlayer(nextAction, nextPlayersWithStatus, game);
  const nextGameOptions = {
    ...game,
    currentPlayer: nextPlayer.nextCurrP,
    currentPlayerId: nextPlayer.nextCurrId,
    currentAction: nextAction,
  };

  setGame(incrementLap(nextGameOptions));

  // switch (game.currentAction) {
  //   case "copy": {
  //     if (currentResponse) {
  //       if (checkForActive(players, game)) {
  //         const nextOptions = incrementLap(game);
  //         const nextPlayers = players.map((p, i) => {
  //           if (i === game.currentPlayerId) {
  //             return {
  //               ...p,
  //               isActive: false,
  //             };
  //           }
  //           return p;
  //         });
  //         setGame({ ...nextOptions });
  //         setPlayers(nextPlayers);
  //         break;
  //       } else {
  //         const nextOptions = incrementLap({ ...game, currentAction: "def" });
  //         const nextPlayers = players.map((p, i) => {
  //           return { ...p, isActive: true };
  //         });
  //         setGame(nextOptions);
  //         setPlayers(nextPlayers);
  //         break;
  //       }
  //     } else {
  //       if (checkForActive(players, game)) {
  //         const nextPlayers = players.map((p, i) => {
  //           if (i === game.currentPlayerId) {
  //             return {
  //               ...p,
  //               letter:
  //                 game.currentPlayer.letter +
  //                 rules.targetWord[game.currentPlayer.letter.length],
  //               isActive: false,
  //             };
  //           }
  //           return p;
  //         });
  //         setPlayers(nextPlayers);
  //         setGame(incrementLap({ ...game }));
  //         break;
  //       } else {
  //         const nextPlayers = players.map((p, i) => {
  //           if (i === game.currentPlayerId) {
  //             return {
  //               ...p,
  //               letter:
  //                 game.currentPlayer.letter +
  //                 rules.targetWord[game.currentPlayer.letter.length],
  //               isActive: true,
  //             };
  //           }
  //           return { ...p, isActive: true };
  //         });
  //         setPlayers(nextPlayers);
  //         setGame(incrementLap({ ...game, currentAction: "def" }));
  //         break;
  //       }
  //     }
  //   }
  //   case "redo": {
  //     break;
  //   }
  //   default: {
  //     if (currentResponse) {
  //       const nextGameOptions = selectCurrentPlayer({
  //         ...game,
  //         currentAction: "copy",
  //       });
  //       const nextPlayers = players.map((p, i) => {
  //         if (i === game.currentPlayerId) {
  //           return {
  //             ...p,
  //             isActive: false,
  //             hasDef: true,
  //           };
  //         }
  //         return p;
  //       });
  //       setPlayers(nextPlayers);
  //       setGame(incrementLap(nextGameOptions));
  //       break;
  //     } else {
  //       // if last to def, reset all to hasdef false
  //       if (checkForHasNotDef(players, game)) {
  //         const nextPlayers = players.map((p) => {
  //           return { ...p, hasDef: false };
  //         });
  //         setPlayers(nextPlayers);
  //         setGame(incrementLap(game));
  //         break;
  //       } else {
  //         setGame(incrementLap(game));
  //         break;
  //       }
  //     }
  //   }
  // }
}

export default nextLap;
