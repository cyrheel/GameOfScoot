import React from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "../features/counter/Counter";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
      <h1>Welcome to the Game of Scoot</h1>
      <button onClick={() => navigate("/create", { replace: true })}>
        Play
      </button>
    </div>
  );
};

export default HomePage;
