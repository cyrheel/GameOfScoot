import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from "styled-components";

import GameContext from "../Context/GameContext";
import PlayersContext from "../Context/PlayerContext";
import { PageWrapper, Header, CustomBtn } from "../Style/style";

const Body = style.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-height: 90%;
  padding: 2%;
`;

const PlayerContainer = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80%;
  overflow: auto;
`;

function SetPlayersPage() {
  const navigate = useNavigate();
  const { players, setPlayers } = useContext(PlayersContext);
  const { game, setGame } = useContext(GameContext);

  return (
    <PageWrapper>
      <Header>
        <CustomBtn onClick={() => navigate("/play", { replace: true })}>
          {"<-"}
        </CustomBtn>
      </Header>
      <Body>
        <button
          onClick={() => {
            const newPlayers = [
              ...players,
              {
                name: `Player ${players.length + 1}`,
                position: players.length + 1,
                letter: "",
                redo: false,
                isActive: true,
                hasDef: false,
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
          style={{ width: "25%" }}
        >
          Add Player
        </button>
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
        <button
          onClick={() => {
            setGame({
              ...game,
              totalPlayer: players.length,
              currentPlayer: players[0],
              isRunning: true,
            });
            navigate("/game", { replace: true });
          }}
        >
          Play with this players
        </button>
      </Body>
    </PageWrapper>
  );
}

export default SetPlayersPage;
