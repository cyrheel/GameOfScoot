import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "styled-components";

import NbOfTry from "../Components/NbOfTry.js";
import IsHard from "../Components/IsHard.js";
import GameName from "../Components/GameName.js";
import GameContext from "../Context/GameContext.js";
import PlayersContext from "../Context/PlayerContext.js";
import { PageWrapper, Header, CustomBtn } from "../Style/style.js";

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

function SetGamePage() {
  const navigate = useNavigate();
  const previousPath = window.location.search.substring(6);

  const { players, setPlayers } = useContext(PlayersContext);
  const { game, setGame } = useContext(GameContext);

  const [tries, setTries] = useState(2);
  const [isHard, setIsHard] = useState(false);
  const [gameName, setGameName] = useState("SCOOT");
  return (
    <PageWrapper>
      <Header>
        <CustomBtn onClick={() => navigate("/play", { replace: true })}>
          {"<-"}
        </CustomBtn>
      </Header>
      <Body>
        {previousPath !== "classic" && (
          <GameName gameName={gameName} setGameName={setGameName} />
        )}
        {previousPath !== "classic" && (
          <IsHard isHard={isHard} setIsHard={setIsHard} />
        )}
        {previousPath !== "classic" && !isHard && (
          <NbOfTry tries={tries} setTries={setTries} />
        )}
        {previousPath !== "classic" && (
          <button
            onClick={() => {
              const newPlayers = [
                ...players,
                {
                  id: players.length,
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
        <button
          id="playrn"
          onClick={() => {
            // TODO: Error handling and add tests
            // if (targetWord === "") {
            // throw error and display whats wrong
            // }
            setGame({
              ...game,
              totalPlayer: players.length,
              currentPlayerId: 0,
              isRunning: true,
              nbOfTry: tries,
              isHard: isHard,
              targetWord: gameName,
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

export default SetGamePage;
