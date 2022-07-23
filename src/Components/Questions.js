import React, { useState } from "react";
import QuestionPanel from "./QuestionPanel";
import "./Question.css";
import QuizFilter from "./QuizFilter";
const Questions=(props)=>{
    const [filteredCategory,SetfilteredCategory]=useState("html")
    const {questions}=props;
    const filterchangeHandler=(selectedCategory)=>{
          SetfilteredCategory(selectedCategory);
    };
    const filterQuestion=questions.filter((question)=>{
        return question.category===filteredCategory;
       });
      // console.log(filterQuestion);
    let quiz_content=<p className="error_msg">There Is No Quiz Available for this category Currently </p>   
    if(filterQuestion.length > 0){

        quiz_content=filterQuestion.map((question,count)=>{
            count++
            const str= <QuestionPanel quest={question}   total={filterQuestion} key={question.id} count={count}  ></QuestionPanel> 
            return str; 
      })
    }
    return (
        <div>
             <h5 className="heading">Total Question:{filterQuestion.length} </h5> 
             <span className="timer">Time Left:10 Minute</span>
            <QuizFilter selected={filteredCategory}  onFilterChange={filterchangeHandler}/>
            {quiz_content}     
        </div>
    );
};
export default Questions;
