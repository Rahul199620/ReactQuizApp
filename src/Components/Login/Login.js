import React, { useState ,useEffect } from 'react';

//import Card from '../UI/Card/Card';
import classes from './Login.module.css';
//import Button from '../UI/Button/Button';
import ErrorModel from '../ErrorModel';
const users=[
  {
      id:1,
      name:"Rahul",
      email:"cse.rahul01@gmail.com",
      role:"admin",
      password:"rahul@123"
  },
  {   id:2,
      name:"Akshay",
      email:"akshay@gmail.com",
      role:"user",  
      password:"akshay@123"
  },
  
]

const Login = (props) => {
  const [email, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [Password, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=>{
    setFormIsValid(
      email.includes('@') && Password.trim().length > 6
    );
  },[email,Password]);


  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

    const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && email.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(email.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(Password.trim().length > 6);
  };
  const errorHandler=()=>{
    setError(null);
    setEnteredEmail("");
    setEnteredPassword("");

}


  const submitHandler = (event) => {
    event.preventDefault();
    {
      users.map((user)=>{
        if(email.trim().length===0 || Password.trim().length===0){
          console.log('i am here');
          setError({
              title:"invalid input",
              message:"email and password are required"
          });
          return;
      }
        if(user.email===email && user.password===Password){ 
          console.log('i am here');
          props.onLogin(email, Password);
            localStorage.setItem("role",user.role);
            localStorage.setItem("name",user.name);  
        } 
        else {
          setError({
            title:"invalid credentials",
            message:"Please enter correct email and password"
        });
        return;
        }
      }); }    
  }
  return (
    <React.Fragment>
     {error &&(
            <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>
        )}  
    <div className="main-div">
    <div className="inner-div">
      
      <h2>Login</h2>
      <hr></hr>
      <form onSubmit={submitHandler} className={classes.login}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={Password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <button className={classes.btn}  type="submit">Login</button>
        </div>
      </form>
      </div></div>
      </React.Fragment>
  );
};

export default Login;
