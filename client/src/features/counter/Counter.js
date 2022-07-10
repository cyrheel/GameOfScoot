import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset, increment, selectCount } from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Decrement value" onClick={() => dispatch(reset())}>
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
