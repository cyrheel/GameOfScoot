function lastTry(players, game) {
  // return true if current player.try >= game.NbOT -1
  return players[game.currentPlayerId].try >= game.nbOfTry - 1;
}

export default lastTry;
