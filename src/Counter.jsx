import { useState } from "react";

function Counter(){

  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return(
  <div className="counter-container">
    <p className="count-display">{count}</p> 
    <button className="btn-1" onClick={decrement}>Decrement</button>
    <button className="btn-1" onClick={increment}>Increment</button>
    <button className="btn-1" onClick={reset}>Reset</button>
  </div>
  )
}


export default Counter