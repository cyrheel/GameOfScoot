import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// TODO: replace by NavLink, in SetQuickGamePage.js too
import styled from "styled-components";

import GoBackBtn from "../Components/GoBackButton.js";
import NbOfTry from "../Components/NbOfTry.js";
import IsHard from "../Components/IsHard.js";
import GameName from "../Components/GameName.js";
import SetPlayers from "../Components/SetPlayers.js";
import GameContext from "../Context/GameContext.js";
import PlayersContext, { initialPlayers } from "../Context/PlayerContext.js";
import { PageWrapper, Header, CustomBtn } from "../Style/style.js";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95%;
  height: 80%;
  padding: 2%;
`;

function SetGamePage() {
  const navigate = useNavigate();

  const { players, setPlayers } = useContext(PlayersContext);
  const { game, setGame } = useContext(GameContext);
  const [tries, setTries] = useState(2);
  const [isHard, setIsHard] = useState(false);
  const [gameName, setGameName] = useState("OUT");

  useEffect(() => {
    setPlayers(initialPlayers.players);
  }, []);

  return (
    <PageWrapper>
      <Header>
        <GoBackBtn destination={"/choose-game"} />
      </Header>
      <Body>
        <GameName gameName={gameName} setGameName={setGameName} />
        <IsHard isHard={isHard} setIsHard={setIsHard} />
        {!isHard && <NbOfTry tries={tries} setTries={setTries} />}
        <SetPlayers players={players} setPlayers={setPlayers} />
        <CustomBtn
          id="playrn"
          onClick={() => {
            // TODO: Error handling and add tests
            // if (targetWord === "" || player[O].name === "") {
            // throw error and display whats wrong
            // }
            if (isHard) {
              const nextPlayers = players.map((element) => {
                return { ...element, try: 1 };
              });
              setPlayers(nextPlayers);
              setGame({
                ...game,
                isRunning: true,
                isHard: isHard,
                targetWord: gameName,
              });
              navigate("/game", { replace: true });
            } else {
              const nextPlayers = players.map((element) => {
                return { ...element, try: tries };
              });
              setPlayers(nextPlayers);
              setGame({
                ...game,
                isRunning: true,
                isHard: isHard,
                targetWord: gameName,
              });
              navigate("/game", { replace: true });
            }
          }}
        >
          Start Game !
        </CustomBtn>
      </Body>
    </PageWrapper>
  );
}

export default SetGamePage;
