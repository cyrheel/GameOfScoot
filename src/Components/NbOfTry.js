import React from "react";

function NbOfTry({ tries, setTries }) {
  return (
    <>
      <p>Nb Of Try : {tries}</p>
      <button onClick={() => setTries(tries + 1)}>+</button>
      <button onClick={() => setTries(tries === 1 ? 1 : tries - 1)}>-</button>
    </>
  );
}

export default NbOfTry;
