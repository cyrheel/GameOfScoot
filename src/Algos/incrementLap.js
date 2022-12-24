function incrementLap(game) {
  return { ...game, lap: game.lap + 1 };
}

export default incrementLap;
