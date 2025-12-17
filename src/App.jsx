import { useState } from "react";
import Counter from "./Counter.jsx"
import Feedback from "./Feedback.jsx";


function App() {

  const [count, setCount] = useState(0);
  const [feedback, setFeedback] = useState([])

  return (
    <div>

      <Counter count = {count} setCount= {setCount} />
      <Feedback feedback = {feedback} setFeedback = {setFeedback} />

    </div>
    
  )
}

export default App
