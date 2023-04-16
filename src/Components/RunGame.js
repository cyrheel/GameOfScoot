import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import PlayerContext from "../Context/PlayerContext.js";
import GameContext from "../Context/GameContext.js";
import { CustomBtn } from "../Style/style.js";

// Const
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const LapInfos = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: space-around;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;
const Action = styled.h2`
  color: #faf0ca;
  margin: 0;
  padding: 2%;
  font-size: 125%;
`;

// Component
function RunGame() {
  const { game, setGame } = useContext(GameContext);
  const { players, setPlayers } = useContext(PlayerContext);
  const [currPlayerId, setCurrPlayerId] = useState(0);
  const [action, setAction] = useState("define");
  const [playersToCopy, setPlayersToCopy] = useState([]);

  function handleYes() {
    if (action === "define") {
      setActionToCopy();
    } else {
      setPlayersAndUpdateCurrId();
    }
  }

  function setActionToCopy() {
    setAction("copy");
    setPlayersToCopy(players.filter((player, index) => index !== currPlayerId));
    setCurrPlayerId(0);
    setPlayers(
      players.map((element) => {
        if (element.name === players[currPlayerId].name) {
          return { ...element, hasDefined: true };
        } else {
          return element;
        }
      })
    );
  }

  function setPlayersAndUpdateCurrId() {
    const nextPlayers = playersToCopy.filter(
      (player, index) => index !== currPlayerId
    );
    if (nextPlayers.length === 0) {
      selectNextDefiner();
    } else {
      updatePlayerInfo(nextPlayers);
    }
  }

  function selectNextDefiner() {
    if (lastToDefine()) {
      const resetedPlayers = players.map((element) => {
        return { ...element, hasDefined: false };
      });
      setAction("define");
      setCurrPlayerId(0);
      setPlayersToCopy([]);
      setPlayers(resetedPlayers);
    } else {
      let nextDefiner = null;
      players.some((el, id) => {
        nextDefiner = id;
        return !el.hasDefined;
      });
      setAction("define");
      setCurrPlayerId(nextDefiner ?? 0);
      setPlayersToCopy([]);
    }
  }

  function updatePlayerInfo(nextPlayers) {
    setCurrPlayerId((currPlayerId + 1) % nextPlayers.length);
    setPlayersToCopy(nextPlayers);
  }

  function handleNo() {
    if (action === "define") {
      handleDefine();
    } else {
      const stillHaveTry = playersToCopy[currPlayerId].try !== 1;
      if (stillHaveTry) {
        handleTryUpdatedPlayers();
      } else {
        handleNoMoreTry();
      }
    }
  }

  function handleDefine() {
    if (lastToDefine()) {
      const resetedPlayers = players.map((element) => {
        return { ...element, hasDefined: false };
      });
      setPlayers(resetedPlayers);
      setCurrPlayerId(0);
    } else {
      const nextPlayers = players.map((element) => {
        if (element.name === players[currPlayerId].name) {
          return { ...element, hasDefined: true };
        } else {
          return element;
        }
      });
      let nextDefiner = null;
      nextPlayers.some((el, id) => {
        nextDefiner = id;
        return !el.hasDefined;
      });
      setPlayers(nextPlayers);
      setCurrPlayerId(nextDefiner ?? 0);
    }
  }

  function handleTryUpdatedPlayers() {
    const tryUpadtedPlayers = playersToCopy.map((el, i) => {
      if (el.name === playersToCopy[currPlayerId].name) {
        return { ...el, try: el.try - 1 };
      } else {
        return el;
      }
    });
    setPlayersToCopy(tryUpadtedPlayers);
    setCurrPlayerId(currPlayerId);
  }

  function handleNoMoreTry() {
    const nextPlayers = playersToCopy.filter(
      (player, index) => index !== currPlayerId
    );
    const letteredPlayers = players.map((el, i) => {
      if (el.name === playersToCopy[currPlayerId].name) {
        return {
          ...el,
          letter: el.letter + game.targetWord[el.letter.length],
        };
      } else {
        return el;
      }
    });
    if (nextPlayers.length === 0) {
      handleEndOfRound(letteredPlayers);
    } else {
      handleNextPlayer(letteredPlayers, nextPlayers);
    }
  }

  function handleEndOfRound(letteredPlayers) {
    if (lastToDefine()) {
      const resetedPlayers = letteredPlayers.map((element) => {
        return { ...element, hasDefined: false };
      });
      setAction("define");
      setCurrPlayerId(0);
      setPlayersToCopy([]);
      setPlayers(resetedPlayers);
    } else {
      let nextDefiner = null;
      players.some((el, id) => {
        nextDefiner = id;
        return !el.hasDefined;
      });
      setPlayers(letteredPlayers);
      setAction("define");
      setCurrPlayerId(nextDefiner ?? 0);
    }
  }

  function handleNextPlayer(letteredPlayers, nextPlayers) {
    setPlayers(letteredPlayers);
    setPlayersToCopy(nextPlayers);
    setCurrPlayerId((currPlayerId + 1) % nextPlayers.length);
  }

  function lastToDefine() {
    const playersWithoutCurr = players.filter(
      (el) => el.name !== players[currPlayerId].name
    );
    let stillActive = 0;
    for (const player of playersWithoutCurr) {
      if (!player.hasDefined) {
        stillActive++;
      }
    }
    return stillActive === 0 ? true : false;
  }

  useEffect(() => {
    for (const player of players) {
      if (player.letter === game.targetWord) {
        setGame({ ...game, isRunning: false });
      }
    }
  }, [game, players, game.targetWord, setGame]);

  return (
    <GameContainer>
      <LapInfos>
        {action === "define" ? (
          <Action>
            {players[currPlayerId].name}, the trick have been defined ?
          </Action>
        ) : (
          <Action>
            {playersToCopy[currPlayerId].name}, you got{" "}
            {playersToCopy[currPlayerId].try} try, the trick have been copied ?
          </Action>
        )}
      </LapInfos>
      <BtnContainer>
        <CustomBtn id="YES" onClick={handleYes} style={{ width: "50%" }}>
          Yes
        </CustomBtn>
        <CustomBtn id="NO" onClick={handleNo} style={{ width: "50%" }}>
          No
        </CustomBtn>
      </BtnContainer>
    </GameContainer>
  );
}
export default RunGame;
