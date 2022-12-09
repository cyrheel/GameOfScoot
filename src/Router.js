import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayersContext, { initialState } from "./context/PlayerContext";

import HomePage from "./Pages/HomePage";
import ChooseGamePage from "./Pages/ChooseGamePage";
import SetPlayersPage from "./Pages/SetPlayersPage";
import GamePage from "./Pages/GamePage";

function Router() {
  const [players, setPlayers] = useState(initialState.players);

  return (
    <PlayersContext.Provider value={{ players, funcs: { setPlayers } }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play" element={<ChooseGamePage />} />
          <Route path="/set-players" element={<SetPlayersPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </PlayersContext.Provider>
  );
}

export default Router;
