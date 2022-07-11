import React from "react";
import { useSelector } from "react-redux";
import { selectPlayers } from "./playersSlice";

const Players = () => {
  const players = useSelector(selectPlayers);

  return (
    <div>
      {players.length > 0 ? (
        players.map((player, index) => {
          return (
            <div key={index}>
              <h1>{player.playerName}</h1>
            </div>
          );
        })
      ) : (
        <div>No players</div>
      )}
    </div>
  );
};

export default Players;
