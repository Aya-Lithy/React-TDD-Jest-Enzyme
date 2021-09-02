import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="counter">
      <h1>This is counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        increment
      </button>
    </div>
  );
};

export default Counter;
