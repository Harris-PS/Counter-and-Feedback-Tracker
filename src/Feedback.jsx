function Feedback({feedback,setFeedback}){

  const newFeedback = () =>{
    setFeedback(feedback)
  }

  return(
    <div className="feedback-container">
      <form className="feedback-form">
        <lable className="feedback-lable">Enter Feedback: </lable>
        <input type="text"></input>
        <button className="btn-2" onClick={newFeedback}>Submit</button>
      </form>
      <p>{feedback}</p>
    </div>
  )

}

export default Feedback