import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCount } from "../features/counter/counterSlice";
import { selectNbOfPlayers } from "../features/rule/ruleSlice";
import Rule from "../features/rule/Rule";
import Player from "../features/player/Player";
import Players from "../features/players/Players";

const CreatePage = () => {
  const navigate = useNavigate();
  const count = useSelector(selectCount);
  const nbOfPlayers = useSelector(selectNbOfPlayers);

  const displayForms = (count) => {
    if (count > 0 && count <= nbOfPlayers) {
      return <Player />;
    } else if (count > nbOfPlayers) {
      return (
        <div>
          <p>Thoses params are ok ?</p>
          <button>Start This Game !</button>
        </div>
      );
    }
    return <Rule />;
  };

  return (
    <div>
      <button onClick={() => navigate("/", { replace: true })}>{"<-"}</button>
      <h1>Create Game !</h1>
      {displayForms(count)}
      <div>
        <h2>{"Players : [] ->"}</h2>
        <div>
          <Players />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
