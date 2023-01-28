function getDefiner(game, currResponse) {
  const { currentAction, currentPlayerId } = game;
  if (currentAction === "def" && currResponse) {
    return currentPlayerId;
  } else {
    return null;
  }
}

export default getDefiner;
