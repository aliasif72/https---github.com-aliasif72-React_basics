import Card from '../UI/Card';
import './Form.css';
import { useState } from 'react';
import axios from 'axios';
import Button from '../UI/Button';
import Error from './Error';
import React from 'react';


function Login()
{
  
    const[data,setData]=useState({
        inputEmail:'',
        inputPassword:'',
    })
    
    const[messg,setMessg]=useState(false);
    
    function emailHandler(event){
    setData((prevData)=> {
        return { ...prevData,inputEmail:event.target.value }
    })
    }

    function passwordHandler(event){
        setData((prevData)=> {
            return { ...prevData,inputPassword:event.target.value }
        })
        }
                
    function formSubmit(event){
        event.preventDefault();
        if(data.inputEmail.trim().length===0 || data.inputPassword.trim().length===0 )
        {
           return setMessg({
                title:'Invalid Input',
                msg:'Please enter a valid details'
            })
             }
            axios.post("http://localhost:4000/user/login",data)
             .then((res)=>{
                if(res) setMessg({
                    title:"Congratulations",
                    msg:"SignUp successfull"
                });
            })
             .catch((err)=>console.log(err));
            setData({
            inputEmail:'',
            inputPassword:'',
         })
    }

    function closeHandler(){
        setMessg(false);
    }
return(
    <React.Fragment>
    <Card className="container">
    <form onSubmit={formSubmit}>
     <label> Email </label>
     <input  onChange={emailHandler} value={data.inputEmail} type="email"/>
     <label> Password </label>
     <input onChange={passwordHandler} value={data.inputPassword} type="password" />
     <br/><br/>
     <Button className="submit" type="submit" text="Login"></Button>
     <br/> <br/>
     </form>
     <br/> <br/>
    </Card>
    {(messg) && <Error title={messg.title} msg={messg.msg} onClose={closeHandler} />}
    </React.Fragment>
)
}

export default Login;