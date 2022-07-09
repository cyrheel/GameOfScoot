import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleName,
  handleNbOfPlayers,
  handleIsHard,
  handleAllowRedo,
  handleNbOfTry,
  handleTargetWord,
  handleLetters,
  selectRules,
} from "./rulesSlice";

const Rules = () => {
  const dispatch = useDispatch();
  const rules = useSelector(selectRules);
  const [gameNameValue, setGameNameValue] = React.useState("");
  const [nbOfPlayers, setNbOfPlayers] = React.useState(2);
  const [isHard, setIsHard] = React.useState(false);
  const [allowRedo, setAllowRedo] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [nbOfTry, setNbOfTry] = React.useState(1);
  // eslint-disable-next-line no-unused-vars
  const [targetWord, setTargetWord] = React.useState("SCOOT");

  return (
    <form
      onSubmit={(e) => {
        // TODO: send data to server
        e.preventDefault();
        console.log(rules);
      }}
    >
      <label htmlFor="name">Game Name :</label>
      <input
        type="text"
        id="name"
        onChange={(e) => {
          setGameNameValue(e.target.value);
          dispatch(handleName(e.target.value));
        }}
        value={gameNameValue}
      />
      <label htmlFor="nop">Number Of Players</label>
      <input
        type="number"
        id="nop"
        onChange={(e) => {
          setNbOfPlayers(e.target.value);
          dispatch(handleNbOfPlayers(e.target.value));
        }}
        value={nbOfPlayers}
      />
      <label htmlFor="hard">Hard Mode</label>
      <input
        type="checkbox"
        id="hard"
        onChange={() => {
          setIsHard(!isHard);
          dispatch(handleIsHard(!isHard));
        }}
        value={isHard}
      />
      <label htmlFor="redo">Allow Redo</label>
      <input
        type="checkbox"
        id="redo"
        onChange={() => {
          setAllowRedo(!allowRedo);
          dispatch(handleAllowRedo(!allowRedo));
        }}
        value={allowRedo}
      />
      <label htmlFor="try">Number Of Try</label>
      <input
        type="number"
        id="try"
        onChange={(e) => {
          setNbOfTry(e.target.value);
          dispatch(handleNbOfTry(e.target.value));
        }}
        value={nbOfTry}
      />
      <label htmlFor="target">Target Word</label>
      <input
        type="text"
        id="target"
        onChange={(e) => {
          setTargetWord(e.target.value);
          dispatch(handleTargetWord(e.target.value));
          dispatch(handleLetters(e.target.value));
        }}
        value={targetWord}
      />
      <button type="submit">{"Next Step ->"}</button>
    </form>
  );
};

export default Rules;
