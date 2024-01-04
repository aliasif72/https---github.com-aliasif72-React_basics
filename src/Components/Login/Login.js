import React, {  useState, useReducer, useEffect} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

function emailReducer(state, action){
  if(action.type==='USER_INPUT')
  {
    return {value:action.val, isValid:action.val.includes('@')} 
  }
  return {value:'', isValid:false}

};

function passwordReducer(state, action){
  if(action.type==='USER_INPUT')
  {
    return { value:action.val, isValid:action.val.trim().length > 6 } 
  }
  return {value:'', isValid:false}

};

function collegeReducer(state, action){
  if(action.type==='USER_INPUT')
  {
    return { value:action.val, isValid:action.val.trim().length > 6 } 
  }
  return {value:'', isValid:false}

};

function Login(props){

  const [formIsValid, setFormIsValid] = useState(false);
  const[emailState,emailDispatcher ] = useReducer(emailReducer, {value:'', isValid:true});
  const[passwordState,passwordDispatcher ] = useReducer(passwordReducer, {value:'', isValid:true});
  const[collegeState,collegeDispatcher ] = useReducer(collegeReducer, {value:'', isValid:true});

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setFormIsValid(
        emailState.isValid && passwordState.isValid && collegeState.isValid);
    },500)
    return ()=>{
         clearTimeout(timer)      
    }},[emailState.isValid, passwordState.isValid, collegeState.isValid])

   const emailChangeHandler = (event) => {
    emailDispatcher({type:'USER_INPUT', val:event.target.value})
   
  }
   const passwordChangeHandler = (event) => {
    passwordDispatcher({type:'USER_INPUT', val:event.target.value});
    setFormIsValid(
           emailState.isValid && event.target.value.trim().length > 6 && collegeState.isValid)
  }

  const CollegeChangeHandler = (event) => {
    collegeDispatcher({type:'USER_INPUT', val:event.target.value})
    setFormIsValid(
      emailState.isValid && passwordState.isValid && event.target.value.trim().length > 6);
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
               />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
           />
        </div>
        <div
          className={`${classes.control} ${
            collegeState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="text"
            value={collegeState.value}
            onChange={CollegeChangeHandler}
            />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}
export default Login;
