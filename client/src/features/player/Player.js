import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleName,
  handlePosition,
  handleRedo,
  selectPlayer,
} from "./playerSlice";

const Player = () => {
  const dispatch = useDispatch();
  const player = useSelector(selectPlayer);
  const [playerNameValue, setplayerNameValue] = React.useState("");
  const [position, setPosition] = React.useState(1);
  const [redo, setRedo] = React.useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(player);
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
