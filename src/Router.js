import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ChooseGamePage from "./Pages/ChooseGamePage";
import SetPlayersPage from "./Pages/SetPlayersPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<ChooseGamePage />} />
        <Route path="/set-players" element={<SetPlayersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
