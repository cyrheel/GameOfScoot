import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PlayersContext, { initialPlayers } from "./Context/PlayerContext.js";
import GameContext, { initialGame } from "./Context/GameContext.js";

import HomePage from "./Pages/HomePage.js";
import ChooseGamePage from "./Pages/ChooseGamePage.js";
import SetGamePage from "./Pages/SetGamePage.js";
import SetQuickGamePage from "./Pages/SetQuickGamePage.js";
import GamePage from "./Pages/GamePage.js";

function Router() {
  const [players, setPlayers] = useState(initialPlayers.players);
  const [game, setGame] = useState(initialGame.game);

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      <GameContext.Provider value={{ game, setGame }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/choose-game" element={<ChooseGamePage />} />
            <Route path="/set-quick-game" element={<SetQuickGamePage />} />
            <Route path="/set-game" element={<SetGamePage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </BrowserRouter>
      </GameContext.Provider>
    </PlayersContext.Provider>
  );
}

export default Router;
