import React from "react";
import style from "styled-components";

import { initialPlayers } from "../Context/PlayerContext.js";

const PlayerContainer = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80%;
  overflow: auto;
`;

function SetPlayers({ players, setPlayers, previousPath }) {
  if (previousPath === "classic") {
    players = initialPlayers.players;
  }
  return (
    <>
      {previousPath !== "classic" && (
        <button
          onClick={() => {
            const newPlayers = [
              ...players,
              {
                name: `Player ${players.length + 1}`,
                position: players.length + 1,
                letter: "",
                try: 2,
                redo: false,
                hasDefine: false,
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
          id="addPlayer"
          style={{ width: "25%" }}
        >
          Add Player
        </button>
      )}
      <PlayerContainer>
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
      </PlayerContainer>
    </>
  );
}

export default SetPlayers;
