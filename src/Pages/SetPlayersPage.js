import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PlayersContext from "../context/PlayerContext";

function SetPlayersPage() {
  const navigate = useNavigate();
  const {
    players,
    funcs: { setPlayers },
  } = useContext(PlayersContext);

  return (
    <div>
      <button onClick={() => navigate("/play", { replace: true })}>
        {"<-"}
      </button>
      <button
        onClick={() => {
          const newPlayers = [
            ...players,
            {
              name: `Player ${players.length + 1}`,
              position: players.length + 1,
              letter: "",
              redo: false,
              stats: {
                nbDef: 0,
                nbFailedDef: 0,
                nbCopied: 0,
                nbFailedTry: 0,
                nbLetterGiven: 0,
              },
            },
          ];
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
                placeholder={player.name}
                onChange={(e) => {
                  const nextPlayers = players.map((p, i) => {
                    if (i === idx) {
                      return {
                        ...p,
                        name: e.target.value,
                      };
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
      <button onClick={() => navigate("/game", { replace: true })}>
        Play with this players
      </button>
    </div>
  );
}

export default SetPlayersPage;
