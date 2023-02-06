function incrementLap(game) {
  // return game context with lap incremented
  return { ...game, lap: game.lap + 1 };
}

export default incrementLap;
