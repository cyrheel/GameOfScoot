import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCount } from "../features/counter/counterSlice";
import Rule from "../features/rule/Rule";
import Player from "../features/player/Player";

const CreatePage = () => {
  const navigate = useNavigate();
  const count = useSelector(selectCount);

  const displayForms = (count) => {
    if (count === 2) {
      return <Player />;
    }
    return <Rule />;
  };

  return (
    <div>
      <button onClick={() => navigate("/", { replace: true })}>{"<-"}</button>
      <h1>Create Game !</h1>
      {displayForms(count)}
    </div>
  );
};

export default CreatePage;
