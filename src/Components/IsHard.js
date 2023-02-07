import React from "react";

function IsHard({ isHard, setIsHard }) {
  return (
    <>
      <p>Hard Mode : {isHard.toString()}</p>
      <input
        type="checkbox"
        value={isHard}
        onChange={() => {
          setIsHard(!isHard);
        }}
      ></input>
    </>
  );
}

export default IsHard;
