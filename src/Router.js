import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PlayersContext, { initialPlayers } from "./Context/PlayerContext.js";
import RulesContext, { initialRules } from "./Context/RulesContext.js";
import GameContext, { initialGame } from "./Context/GameContext.js";

import HomePage from "./Pages/HomePage.js";
import ChooseGamePage from "./Pages/ChooseGamePage.js";
import SetPlayersPage from "./Pages/SetPlayersPage.js";
import GamePage from "./Pages/GamePage.js";
import Didacticiel from "./Pages/Didacticiel.js";

function Router() {
  const [players, setPlayers] = useState(initialPlayers.players);
  const [rules, setRules] = useState(initialRules.rules);
  const [game, setGame] = useState(initialGame.game);

  return (
    <RulesContext.Provider value={{ rules, setRules }}>
      <PlayersContext.Provider value={{ players, setPlayers }}>
        <GameContext.Provider value={{ game, setGame }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/play" element={<ChooseGamePage />} />
              <Route path="/didacticiel" element={<Didacticiel />} />
              <Route path="/set-players" element={<SetPlayersPage />} />
              <Route path="/game" element={<GamePage />} />
            </Routes>
          </BrowserRouter>
        </GameContext.Provider>
      </PlayersContext.Provider>
    </RulesContext.Provider>
  );
}

export default Router;
