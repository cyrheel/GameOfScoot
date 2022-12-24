function checkForHasDef(players, game) {
  // return false if someone else than currentPlayer have not def
  const playersWithoutCurr = players.filter(
    (el) => el.name !== game.currentPlayer.name
  );
  for (const player of playersWithoutCurr) {
    if (!player.hasDef) {
      return false;
    }
  }
  return true;
}

export default checkForHasDef;