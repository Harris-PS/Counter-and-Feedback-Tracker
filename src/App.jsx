import Counter from "./Counter.jsx"
import Feedback from "./Feedback.jsx"


function App() {

  const [count, setCount] = useState(0);
  const [feedback, setFeedback] = useState("");

  return (
    <div>
      <h1>Dashboard</h1>

      <Counter count = {count} setCount= {setCount}/>

    </div>
    
  )
}

export default App
