function getDefiner(game, currResponse) {
  // return the id of the new definer otherwise return null
  const { currentAction, currentPlayerId } = game;
  if (currentAction === "def" && currResponse) {
    return currentPlayerId;
  } else {
    return null;
  }
}

export default getDefiner;
