function lastToPlay(players, game) {
  // return false is there is another player active than current
  const playersWithoutCurr = players.filter(
    (el) => el.name !== game.currentPlayer.name
  );
  for (const player of playersWithoutCurr) {
    if (player.isActive) {
      return false;
    }
  }
  return true;
}

export default lastToPlay;
