import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PlayersContext, { initialPlayers } from "./Context/PlayerContext";
import RulesContext, { initialRules } from "./Context/RulesContext";
import GameContext, { initialGame } from "./Context/GameContext";

import HomePage from "./Pages/HomePage";
import ChooseGamePage from "./Pages/ChooseGamePage";
import SetPlayersPage from "./Pages/SetPlayersPage";
import GamePage from "./Pages/GamePage";

function Router() {
  const [players, setPlayers] = useState(initialPlayers.players);
  const [rules, setRules] = useState(initialRules.rules);
  const [customRules, setCustomRules] = useState(initialRules.customRules);
  const [game, setGame] = useState(initialGame.game);

  return (
    <RulesContext.Provider
      value={{ rules, customRules, setRules, setCustomRules }}
    >
      <PlayersContext.Provider value={{ players, setPlayers }}>
        <GameContext.Provider value={{ game, setGame }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/play" element={<ChooseGamePage />} />
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
