function Feedback({feedback, setFeedback}){

  return(
    <div className="feedback-container">
      <form className="feedback-form">
        <lable className="feedback-lable">Enter Feedback: </lable>
        <input type="text"value={setFeedback}></input>
        <button className="btn-2">Submit</button>
      </form>
    </div>
  )

}

export default Feedback