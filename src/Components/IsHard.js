import React from "react";

function IsHard({ isHard, setIsHard }) {
  //TODO: Add explicit (if true there is only one try and missing a def give u a letter)
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
