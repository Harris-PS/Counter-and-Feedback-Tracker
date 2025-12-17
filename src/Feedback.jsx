import { useState } from "react";

function Feedback({feedback,setFeedback}){

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setFeedback([...feedback, input]); 
      setInput(""); 
    }
  };

  return(
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label className="feedback-lable">Enter Feedback: </label>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="btn-2">Submit</button>
      </form>
      <ul className="feedback-list">
        {feedback.map((item) => (
          <li key = {item}>{item}</li>
        ))}
      </ul>
    </div>
  )

}

export default Feedback