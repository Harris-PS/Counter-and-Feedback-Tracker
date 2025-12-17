import { useState } from "react";
import Counter from "./Counter.jsx"
import Feedback from "./Feedback.jsx";


function App() {

  const [count, setCount] = useState(0);

  return (
    <div>

      <Counter count = {count} setCount= {setCount}/>
      <Feedback/>

    </div>
    
  )
}

export default App
