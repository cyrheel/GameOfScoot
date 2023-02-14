function lastToPlay(players, game) {
  // return false is there is another player active than current
  const playersWithoutCurr = players.filter(
    (el) => el.name !== players[game.currentPlayerId].name
  );
  let stillActive = 0;
  for (const player of playersWithoutCurr) {
    if (player.isActive) {
      stillActive++;
    }
  }
  return stillActive === 0 ? true : false;
}

export default lastToPlay;
