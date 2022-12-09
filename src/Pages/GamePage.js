import React, { useContext } from "react";

// import PlayersContext from "../context/PlayerContext";
import RulesContext from "../Context/RulesContext";
import GameContext, { initialGame } from "../Context/GameContext";

// import GameInfo from "../Components/GameInfo";
import RunGame from "../Components/RunGame";

function GamePage() {
  // const { players } = useContext(PlayersContext);
  const { rules } = useContext(RulesContext);
  const { setGame } = useContext(GameContext);

  return (
    <div>
      <div>
        <p>{rules.gameName}</p>
        <button onClick={() => setGame(initialGame.game)}>Quit Game</button>
        {/* <GameInfo /> */}
      </div>
      <div>
        <RunGame />
      </div>
    </div>
  );
}

export default GamePage;
