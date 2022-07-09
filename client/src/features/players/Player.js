import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleName,
  handlePosition,
  handleRedo,
  handleLetter,
  handleStats,
  selectPlayerS,
} from "./playerSlice";

const Player = () => {
  const dispatch = useDispatch();
  const playerS = useSelector(selectPlayerS);
  const [playerNameValue, setplayerNameValue] = React.useState("");
  const [position, setPosition] = React.useState(1);
  const [redo, setRedo] = React.useState(false);
  const [lettes, setLetters] = React.useState("");
  const [stats, setStats] = React.useState({
    nbDef: 0,
    nbFailedDef: 0,
    nbCopied: 0,
    nbFailedTry: 0,
    nbLetterGiven: 0,
  });

  return (
    <form
      onSubmit={(e) => {
        // TODO: send data to server
        e.preventDefault();
        console.log(playerS);
      }}
    >
      <label htmlFor="name">Player Name :</label>
      <input
        type="text"
        id="name"
        onChange={(e) => {
          setplayerNameValue(e.target.value);
          dispatch(handleName(e.target.value));
        }}
        value={playerNameValue}
      />
      <label htmlFor="pos">Ordre de passage</label>
      <input
        type="number"
        id="pos"
        onChange={(e) => {
          setPosition(e.target.value);
          dispatch(handlePosition(e.target.value));
        }}
        value={position}
      />
      <label htmlFor="redo">Redo ?</label>
      <input
        type="checkbox"
        id="redo"
        onChange={() => {
          setRedo(!redo);
          dispatch(handleRedo(redo));
        }}
        value={redo}
      />
      <label htmlFor="redo">Allow Redo</label>
      <button>Add a player</button>
      <button type="submit">{"Next Step ->"}</button>
    </form>
  );
};

export default Player;
