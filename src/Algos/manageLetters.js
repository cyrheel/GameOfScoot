function manageLetters(players, game, rules, currResponse) {
  const { currentAction, currentPlayerId } = game;
  if (currentAction === "copy") {
    if (!currResponse) {
      const nextPlayers = players.map((p, i) => {
        if (i === currentPlayerId) {
          const nextLetters =
            players[i].letter + rules.targetWord[players[i].letter.length];
          return {
            ...p,
            letter: nextLetters,
          };
        } else {
          return p;
        }
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
