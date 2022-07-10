import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Welcome</h1>
      <button onClick={() => navigate("/create", { replace: true })}>
        Play
      </button>
    </div>
  );
};

export default HomePage;
