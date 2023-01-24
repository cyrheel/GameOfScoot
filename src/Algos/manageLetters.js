function manageLetters(
  currAction,
  currResponse,
  currPlayerId,
  players,
  game,
  rules
) {
  if (currAction === "copy") {
    if (!currResponse) {
      const nextPlayers = players.map((p, i) => {
        if (i === currPlayerId) {
          const nextLetters =
            game.currentPlayer.letter +
            rules.targetWord[game.currentPlayer.letter.length];
          return {
            ...p,
            letter: nextLetters,
          };
        }
        return p;
      });
      return nextPlayers;
    } else {
      return players;
    }
  } else {
    return players;
  }
}

export default manageLetters;
