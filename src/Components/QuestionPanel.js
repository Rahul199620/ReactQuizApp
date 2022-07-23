import "./QuestionPanel.css";
const QuestionPanel=(props)=>{
    let {quest , count ,total} =props;
     console.log(total);
    return (
        <div className="question-div">
            <div className="quiz_box">
                <h4>Q{count}:{quest.question} ?</h4>
                <div className="option">{quest.option1}</div>
                <div className="option">{quest.option2}</div>
                <div className="option">{quest.option3}</div>
                <div className="option">{quest.option4}</div>
                <span className="pagination">{count++} Of {total.length}</span> 
            </div>
        </div>
    )
}
export default QuestionPanel