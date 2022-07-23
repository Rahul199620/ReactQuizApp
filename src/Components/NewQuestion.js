// import React, { useState } from "react";
import './NewQuestion.css';
import QuestionForm from './QuestionForm';
const NewQuestion = (props) => {
const saveQuestionHandlers=(enteredQuestion)=>{
  const questionData={
    ...enteredQuestion,  id: Math.random().toString(),
  };
props.onaAddQuestion(questionData);
};
//console.log(props)
    return (
        <div className='main-div'>
         <QuestionForm onSaveQuestionData={saveQuestionHandlers} />
         <div className='space'></div>
        </div>
    )
} 
export default NewQuestion