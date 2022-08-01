
import "./QuestionForm.css";
import React, { useState } from "react";
const QuestionForm=(props)=>{
  const[showForm,setShowForm]= useState(false);
    const [question, setQuestion] = useState("");
    const [category, setcategory] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [correct, setCorrect] = useState("");

      const  questionHandler=(event)=>{
       // console.log(event.target.value);
        setQuestion(event.target.value);
      }
      const  categoryHandler=(event)=>{
        //console.log(event.target.value);
        setcategory(event.target.value);
      }
      const  option1Handler=(event)=>{
        //console.log(event.target.value);
        setOption1(event.target.value); 
      }
      const  option2Handler=(event)=>{
       // console.log(event.target.value);
        setOption2(event.target.value); 
      }
      const  option3Handler=(event)=>{
        //console.log(event.target.value);
        setOption3(event.target.value); 
      }
      const  option4Handler=(event)=>{
        //console.log(event.target.value);
        setOption4(event.target.value); 
      }
      const  correctHandler=(event)=>{
       // console.log(event.target.value);
        setCorrect(event.target.value); 
      }
      const  handleSubmit=(event)=>{
        event.preventDefault();
  
         const newQuestion={
         question:question,
         category:category, 
         option1:option1,
         option2:option2,
         option3:option3,
         option4:option4,
         correct:correct,
       };
       console.log(newQuestion);
       props.onSaveQuestionData(newQuestion);
       setQuestion("");
       setcategory("");
       setOption1("");
       setOption2("");
       setOption3("");
       setOption4("");
       setCorrect("");
      }
      return (
        <div className='inner-div'>
             <h4 className="question_head">Question Panel</h4>
              <hr></hr>
            <form action='' onSubmit={handleSubmit}>
            {showForm &&
              <div className='new-expense__controls'>
                <div className='new-expense__control'>
                  <label>Question</label>
                      <textarea  value={question}  name="question" onChange={questionHandler}/>
                </div>
                <div className="new-expense__control">
                   <label>Category</label>
                     <select className="filter_select"  value={category} name='category' onChange={categoryHandler}>
                      <option value='react'>React</option>
                      <option value="html">HTML</option>
                      <option value='css'>Css</option>
                      <option value="javascript">Javascript </option>
                      </select>
                 </div>
                 <div className='new-expense__control'>
                    <label>Option 1</label>
                    <input type="text" value={option1} name="option1" onChange={option1Handler}  />
                 </div>
                 <div className="new-expense__control">
                    <label>Option 2</label>
                    <input type='text' value={option2} name='option2' onChange={option2Handler} />
                  </div>
                  <div className='new-expense__control'>
                    <label>Option 3</label>
                    <input type="text" value={option3} name="option3" onChange={option3Handler} />
                  </div>
                  <div className="new-expense__control">
                    <label>Option 4</label>
                    <input type='text' value={option4}  name='option4' onChange={option4Handler}/>
                  </div>
                  <div className='new-expense__control'>
                     <label>Correct Option</label>
                     <select className="filter_select" value={correct} name="correct" onChange={correctHandler}>
                         <option value="option1">option1</option>
                         <option value='option2'>option2</option>
                         <option value="option3">option3</option>
                         <option value='option4'>option4</option>
                     </select>
                    </div>
              </div>
              }        
              <button className="btn" type="submit" onClick={()=>{
                setShowForm(!showForm)
              }} >Create Quiz</button>
            </form>
         </div>
    )}
export default QuestionForm

