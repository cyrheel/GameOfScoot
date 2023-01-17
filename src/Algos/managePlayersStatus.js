import { createClientSideURL } from "@remix-run/router/dist/history";
import checkForHasDef from "./checkForHasDef";
import lastToPlay from "./lastToPlay";

function managePlayersStatus(
  currAction,
  currResponse,
  players,
  currPlayerId,
  game
) {
  if (currAction === "def" && currResponse) {
    return currPlayerId;
  } else {
    return;
  }
}

export default managePlayersStatus;
