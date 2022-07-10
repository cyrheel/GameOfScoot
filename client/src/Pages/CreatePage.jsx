import React from "react";
import { useNavigate } from "react-router-dom";
import Rule from "../features/rule/Rule";

const CreatePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/", { replace: true })}>{"<-"}</button>
      <h1>Create Game !</h1>
      <h2>Define your rules</h2>
      <Rule />
    </div>
  );
};

export default CreatePage;
