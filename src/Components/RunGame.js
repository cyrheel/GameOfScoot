import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import Translate from "./Translate.js";
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

function incrementStat(players, name, stat) {
  return players.map((p) => {
    if (p.name === name) {
      return { ...p, stats: { ...p.stats, [stat]: p.stats[stat] + 1 } };
    }
    return p;
  });
}

// Component
function RunGame({ restart, setRestart }) {
  const { game, setGame } = useContext(GameContext);
  const { players, setPlayers } = useContext(PlayerContext);
  const [currPlayerId, setCurrPlayerId] = useState(0);
  const [action, setAction] = useState("define");
  const [playersToCopy, setPlayersToCopy] = useState([]);
  const [definerName, setDefinerName] = useState("");

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
    setDefinerName(players[currPlayerId].name);
    let nextPlayers = players.map((element) => {
      if (element.name === players[currPlayerId].name) {
        return {
          ...element,
          hasDefined: true,
        };
      } else {
        return element;
      }
    });
    nextPlayers = incrementStat(
      nextPlayers,
      players[currPlayerId].name,
      "nbDef"
    );
    setPlayers(nextPlayers);
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
      let resetedPlayers = players.map((element) => {
        return { ...element, hasDefined: false };
      });
      resetedPlayers = incrementStat(
        resetedPlayers,
        playersToCopy[currPlayerId].name,
        "nbCopied"
      );
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
      const updatedPlayers = incrementStat(
        players,
        playersToCopy[currPlayerId].name,
        "nbCopied"
      );
      setAction("define");
      setCurrPlayerId(nextDefiner ?? 0);
      setPlayersToCopy([]);
      setPlayers(updatedPlayers);
    }
  }

  function updatePlayerInfo(nextPlayers) {
    const updatedPlayers = incrementStat(
      players,
      playersToCopy[currPlayerId].name,
      "nbCopied"
    );
    setPlayers(updatedPlayers);
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
      let resetedPlayers = players.map((element) => {
        if (element.name === players[currPlayerId].name) {
          return {
            ...element,
            hasDefined: false,
          };
        } else {
          return {
            ...element,
            hasDefined: false,
          };
        }
      });
      resetedPlayers = incrementStat(
        resetedPlayers,
        players[currPlayerId].name,
        "nbFailedDef"
      );
      setPlayers(resetedPlayers);
      setCurrPlayerId(0);
    } else {
      let nextPlayers = players.map((element) => {
        if (element.name === players[currPlayerId].name) {
          return {
            ...element,
            hasDefined: true,
          };
        } else {
          return element;
        }
      });
      nextPlayers = incrementStat(
        nextPlayers,
        players[currPlayerId].name,
        "nbFailedDef"
      );
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
    const updatedPlayers = incrementStat(
      players,
      playersToCopy[currPlayerId].name,
      "nbFailedTry"
    );
    setPlayers(updatedPlayers);
    setPlayersToCopy(tryUpadtedPlayers);
    setCurrPlayerId(currPlayerId);
  }

  function handleNoMoreTry() {
    const nextPlayers = playersToCopy.filter(
      (player, index) => index !== currPlayerId
    );
    let letteredPlayers = players.map((el, i) => {
      if (el.name === playersToCopy[currPlayerId].name) {
        return {
          ...el,
          letter: el.letter + game.targetWord[el.letter.length],
        };
      } else {
        return el;
      }
    });
    letteredPlayers = incrementStat(
      letteredPlayers,
      definerName,
      "nbLetterGiven"
    );
    if (nextPlayers.length === 0) {
      handleEndOfRound(letteredPlayers);
    } else {
      handleNextPlayer(letteredPlayers, nextPlayers);
    }
  }

  function handleEndOfRound(letteredPlayers) {
    if (lastToDefine()) {
      let resetedPlayers = letteredPlayers.map((element) => {
        return { ...element, hasDefined: false };
      });
      resetedPlayers = incrementStat(
        resetedPlayers,
        playersToCopy[currPlayerId].name,
        "nbFailedTry"
      );
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
      const updatedPlayers = incrementStat(
        letteredPlayers,
        playersToCopy[currPlayerId].name,
        "nbFailedTry"
      );
      setPlayers(updatedPlayers);
      setAction("define");
      setCurrPlayerId(nextDefiner ?? 0);
    }
  }

  function handleNextPlayer(letteredPlayers, nextPlayers) {
    const updatedPlayers = incrementStat(
      letteredPlayers,
      playersToCopy[currPlayerId].name,
      "nbFailedTry"
    );
    setPlayers(updatedPlayers);
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

  useEffect(() => {
    if (restart) {
      setCurrPlayerId(0);
      setAction("define");
      setPlayersToCopy([]);
      setRestart(false);
    }
  }, [restart, setRestart]);

  return (
    <GameContainer>
      <LapInfos>
        {action === "define" ? (
          <Action>
            {players[currPlayerId].name + ", "}
            <Translate>the trick have been imposed ?</Translate>
          </Action>
        ) : (
          <Action>
            {playersToCopy[currPlayerId].name + ", "}
            <Translate>you got </Translate>
            {playersToCopy[currPlayerId].try}
            <Translate> try, the trick have been copied ?</Translate>
          </Action>
        )}
      </LapInfos>
      <BtnContainer>
        <CustomBtn id="YES" onClick={handleYes} style={{ width: "50%" }}>
          <Translate>Yes</Translate>
        </CustomBtn>
        <CustomBtn id="NO" onClick={handleNo} style={{ width: "50%" }}>
          <Translate>No</Translate>
        </CustomBtn>
      </BtnContainer>
    </GameContainer>
  );
}
export default RunGame;
