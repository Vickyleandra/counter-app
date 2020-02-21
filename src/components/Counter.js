import React, { useState } from "react";

function Counter() {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>The counter is at : {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input
        type="text"
        value={count}
        onChange={e => setCount(Number(e.target.value))}
      />
    </div>
  );
}

export default Counter;
