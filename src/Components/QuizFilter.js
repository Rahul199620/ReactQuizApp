import React from "react";
import "./QuizFilter.css";
const QuizFilter=(props)=>{
    const dropdownHandler=(event)=>{
        //console.log('filterd category click');
        //console.log(event.target.value);
        props.onFilterChange(event.target.value);
    };
    return(
        <div className="question-filter">
           <div className="quiz-filter__control">
              <label>Category Filter:   </label>
              <select className="fil_select" value={props.selected} onChange={dropdownHandler}>
                 <option value="react">React</option>
                 <option value="html">HTML</option>
                 <option value="css">Css</option>
                 <option value="javascript">Javascript</option>
              </select>
            </div>
        </div>
    )};
export default QuizFilter