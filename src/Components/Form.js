import Card from "../UI/Card"
import Button from "../UI/Button";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

function Form(props){
    const[form,Setform]=useState("1");
    
      function signinHandler(){
         Setform("2");
               }
      
      function signupHandler(){
        Setform("3");
      }

    if(form === "1") 
    return(
 <Card className="container">
   <h2>Welcome to Registration</h2>
 <Button className="submit" onClose={signinHandler} type="submit" text="Sign in"></Button>
 <Button className="submit" onClose={signupHandler} type="submit" text="Sign up"></Button>
 <br/> <br/> 
  <br/> <br/>
</Card>
    )
    else if(form === "2")
    {
        return( <Login/>)
    }
    else
    {
        return (<Signup onSuccess={signinHandler} prop={props.onData}/>)
    }
}

export default Form;