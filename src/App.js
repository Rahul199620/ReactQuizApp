import logo from './logo.svg';
import './App.css';
import React, { useEffect,useState } from "react";
import QuestionPanel from './Components/QuestionPanel';
import NewQuestion from './Components/NewQuestion';
import Questions from './Components/Questions';
import Login from './Components/Login/Login';
import MainHeader from './Components/MainHeader/MainHeader';
const initial_question=[
  {
      id:1,
      question:"What is the full form of HTML",
      option1:"Hello To My Land",
      option2:"HyperText Markup Language",
      option3:"Hyper Test Markup Language",
      option4:"Hello Text Markup Language",
      category:"html",
      correct:"option2"
  },
  {   id:2,
      question:"What is the full form of Js",
      option1:"JavaScript",
      option2:"Java Source",
      option3:"Java Security",
      option4:"Java",
      category:"javascript",
      correct:"option1"
  },
  {
      id:3,
      question:"How we can print output in console",
      option1:"console()",
      option2:"console.log();",
      option3:"csole.log()",
      option4:"none",
      category:"javascript",
      correct:"option2"
  },
  {   id:4,
      question:"function and var are known as",
      option1:"Keywords",
      option2:"Data types",
      option3:"Declaration statements",
      option4:"Prototypes",
      category:"javascript",
      correct:"option3"
  },
  {  id:5,
    question:"Which of the following command is used to create react-js-app",
    option1:"npx create-react-app appname",
    option2:"npm install create-react-app",
    option3:"npx install create-react-app -g",
    option4:"install - l create-react-app",
    category:"react",
    correct:"option1"
    
}
]


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const loggedinUserStatus=localStorage.getItem("role");
    if(loggedinUserStatus==="admin" || loggedinUserStatus==="user"){
     setIsLoggedIn(true);
    }
  },[]);
 
   const loginHandler = (email, password) => {
     // We should of course check email and password
     // But it's just a dummy/ demo anyways

     setIsLoggedIn(true);
     
   };
 
   const logoutHandler = () => {
     localStorage.removeItem('role');
     localStorage.removeItem('name');
     setIsLoggedIn(false);
   };
 
  const [questions, setQuestions] = useState(initial_question);

  //console.log(questions);

  const addQuestionhandler = (question)=>{
    setQuestions((prevState) => {
      return [question, ...prevState ];
    });

  };
   
  
  if(localStorage.getItem("role")==="admin"){
    return (
      <div className="App">
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn &&<NewQuestion  onaAddQuestion={addQuestionhandler} onLogout={logoutHandler} />}
        {isLoggedIn &&
        <div className="main-div">
            <div className="inner-div">
                <h4  className="main_head">Quiz Application</h4>
                 <Questions questions={questions} onLogout={logoutHandler} />
              <hr></hr>
              <button className="btn">Submit</button>
            </div>
          </div>}
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn &&
        <div className="main-div">
            <div className="inner-div">
                <h4  className="main_head">Quiz Application</h4>
                 <Questions questions={questions} onLogout={logoutHandler} />
              <hr></hr>
              <button className="btn">Submit</button>
            </div>
          </div>}
      </div>
    );
  }
  
}

export default App;
