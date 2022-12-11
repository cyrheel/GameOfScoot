import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from "styled-components";

import PlayersContext, { initialPlayers } from "../Context/PlayerContext";
// import RulesContext from "../Context/RulesContext";
import GameContext, { initialGame } from "../Context/GameContext";
import GameInfo from "../Components/GameInfo";
import RunGame from "../Components/RunGame";
import { PageWrapper, Header, CustomBtn } from "../Style/style";

const InfoWrapper = style.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 40%;
  max-height: 40%;
  padding: 1%;
`;

const GameWrapper = style.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 40%;
  padding: 1%;
`;

function GamePage() {
  const navigate = useNavigate();
  const { players, setPlayers } = useContext(PlayersContext);
  // const { rules } = useContext(RulesContext);
  const { setGame } = useContext(GameContext);

  return (
    <PageWrapper>
      <Header>
        <CustomBtn onClick={() => navigate("/set-players", { replace: true })}>
          {"<-"}
        </CustomBtn>
        <button
          onClick={() => {
            const nextPlayers = players.map((p, i) => {
              return {
                ...initialPlayers.players[0],
                name: p.name,
                position: p.position,
              };
            });
            setPlayers(nextPlayers);
            setGame({
              ...initialGame.game,
              totalPlayer: players.length,
              currentPlayer: players[0],
              currentPlayerId: 0,
              isRunning: true,
            });
          }}
        >
          Restart Game
        </button>
      </Header>
      <GameWrapper>
        <RunGame />
      </GameWrapper>
      <InfoWrapper>
        <GameInfo />
      </InfoWrapper>
    </PageWrapper>
  );
}

export default GamePage;
