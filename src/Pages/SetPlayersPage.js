import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SetPlayersPage() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState(["Player 1", "Player 2"]);

  return (
    <div>
      <button onClick={() => navigate("/play", { replace: true })}>
        {"<-"}
      </button>
      <button
        onClick={() => {
          const newPlayers = [...players, `Player ${players.length + 1}`];
          setPlayers(newPlayers);
        }}
      >
        Add Player
      </button>
      <div>
        {players.map((player, idx) => {
          return (
            <div key={idx}>
              <input
                placeholder={player}
                onChange={(e) => {
                  const nextPlayers = players.map((p, i) => {
                    if (i === idx) {
                      return e.target.value;
                    }
                    return p;
                  });
                  setPlayers(nextPlayers);
                }}
              />
              {players.length > 2 && (
                <button
                  onClick={() => {
                    setPlayers(players.filter((p, i) => i !== idx));
                  }}
                >
                  X
                </button>
              )}
            </div>
          );
        })}
      </div>
      <button>Play with this players</button>
    </div>
  );
}

export default SetPlayersPage;
