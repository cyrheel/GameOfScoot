import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "styled-components";

import NbOfTry from "../Components/NbOfTry.js";
import IsHard from "../Components/IsHard.js";
import GameName from "../Components/GameName.js";
import SetPlayers from "../Components/SetPlayers.js";
import GameContext from "../Context/GameContext.js";
import PlayersContext, { initialPlayers } from "../Context/PlayerContext.js";
import { PageWrapper, Header, CustomBtn } from "../Style/style.js";

const Body = style.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-height: 90%;
  padding: 2%;
`;

function SetGamePage() {
  const navigate = useNavigate();
  const previousPath = window.location.search.substring(6);

  const { players, setPlayers } = useContext(PlayersContext);
  const { game, setGame } = useContext(GameContext);

  const [nextPlayers, setNextPlayers] = useState(
    previousPath === "classic" ? initialPlayers.players : players
  );
  const [tries, setTries] = useState(2);
  const [isHard, setIsHard] = useState(false);
  const [gameName, setGameName] = useState("SCOOT");
  return (
    <PageWrapper>
      <Header>
        <CustomBtn
          id="goback"
          onClick={() => navigate("/play", { replace: true })}
        >
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
        <SetPlayers
          players={nextPlayers}
          setPlayers={setNextPlayers}
          previousPath={previousPath}
        />
        <button
          id="playrn"
          onClick={() => {
            // TODO: Error handling and add tests
            // if (targetWord === "" || player[O].name === "") {
            // throw error and display whats wrong
            // }
            setPlayers(nextPlayers);
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
          Play RN!
        </button>
      </Body>
    </PageWrapper>
  );
}

export default SetGamePage;
