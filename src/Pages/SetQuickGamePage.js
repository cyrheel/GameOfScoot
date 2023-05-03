import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PlayersContext, { initialPlayers } from "../Context/PlayerContext.js";
import GameContext from "../Context/GameContext.js";
import PreferenceContext from "../Context/PreferenceContext.js";
import { PageWrapper, Header, CustomBtn, TextInput } from "../Style/style.js";
import GoBackBtn from "../Components/GoBackButton.js";
import Translate from "../Components/Translate.js";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 60%;
  padding: 2%;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80%;
  overflow: auto;
  gap: 5px;
`;
const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

function SetQuickGamePage() {
  const navigate = useNavigate();
  const { players, setPlayers } = useContext(PlayersContext);
  const { game, setGame } = useContext(GameContext);
  const { preferences } = useContext(PreferenceContext);

  useEffect(() => {
    setPlayers(initialPlayers.players);
  }, [setPlayers]);

  return (
    <PageWrapper>
      <Header>
        <GoBackBtn destination={"/choose-game"} />
      </Header>
      <Body>
        <h3 style={{ color: "#FAF0CA" }}>
          <Translate>1v1, 2 try, 3 letters</Translate>
        </h3>
        <PlayerContainer>
          {players.map((player, idx) => {
            return (
              <ItemContainer key={idx}>
                <TextInput
                  placeholder={
                    preferences.language === "en"
                      ? "Player name..."
                      : "Nom du joueur..."
                  }
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
              </ItemContainer>
            );
          })}
        </PlayerContainer>
        <CustomBtn
          id="playrn"
          onClick={() => {
            // TODO: Error handling and add tests
            // if (targetWord === "" || player[O].name === "") {
            // throw error and display whats wrong
            // }
            setGame({
              ...game,
              isRunning: true,
              isHard: false,
              targetWord: "OUT",
            });
            navigate("/game", { replace: true });
          }}
        >
          <Translate>Start Game !</Translate>
        </CustomBtn>
      </Body>
    </PageWrapper>
  );
}

export default SetQuickGamePage;
