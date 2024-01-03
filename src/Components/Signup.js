import Card from '../UI/Card';
import './Form.css';
import Button from '../UI/Button';
import {useState} from 'react';
import Error from './Error';
import axios from 'axios';
import React from 'react';



function Signup(props){

const[data,setData]=useState({
    inputName:'',
    inputEmail:'',
    inputPhone:'',
    inputPassword:'',
    inputImage:''
})

const[messg,setMessg]=useState(false);

const[signUP,setsignUP]=useState(false);

function nameHandler(event){
    setData((prevData)=> {
        return { ...prevData,inputName:event.target.value }
    })
}

function emailHandler(event){
setData((prevData)=> {
    return { ...prevData,inputEmail:event.target.value }
})
}

function phoneHandler(event){
    setData((prevData)=> {
        return { ...prevData,inputPhone:event.target.value }
    })
    }
    
function passwordHandler(event){
    setData((prevData)=> {
        return { ...prevData,inputPassword:event.target.value }
    })
    }

    function imageHandler(event){
         setData((prevData)=>{
          return { ...prevData,inputImage: event.target.files[0]}
    })
}
            
function formSubmit(event){
    event.preventDefault();
    if(data.inputName.trim().length===0 || data.inputPhone.trim().length===0 || data.inputEmail.trim().length===0)
    {
       return setMessg({
            title:'Invalid Input',
            msg:'Please enter a valid details'
        })
         }
         const formData=new FormData();
         formData.append('image',data.inputImage);   
         formData.append('name',data.inputName);   
         formData.append('email',data.inputEmail);   
         formData.append('password',data.inputPassword);   
         formData.append('phone',data.inputPhone);   
         props.prop(data);
         axios.post("http://localhost:4000/user/signUp",formData)
         .then((res)=>{
            if(res) {
               setsignUP(true);
            setMessg({
                title:"Congratulations",
                msg:"SignUp successfull"
            })
                }})
         .catch((err)=>console.log(err));
        setData({
        inputName:'',
        inputEmail:'',
        inputPassword:'',
        inputPhone:'',
        inputImage:''
     })
}

    function closeHandler(){
        setMessg(false);
        (signUP) && props.onSuccess();
    }
    

return (
    <React.Fragment>
    <Card className="container">
    <form onSubmit={formSubmit}>
    <label> Name </label>
     <input onChange={nameHandler} value={data.inputName} type="text"/>
     <label> Email </label>
     <input  onChange={emailHandler} value={data.inputEmail} type="email"/>
     <label> Phone </label>
     <input onChange={phoneHandler} value={data.inputPhone} type="number"/>
     <label> Password </label>
     <input onChange={passwordHandler} value={data.inputPassword} type="password" />
     <br/><br/>
     <button type="button"><input name="image" onChange={imageHandler} type="file"/>
     <h2>Profile Image</h2></button>
     <Button className="submit" type="submit" text="Add User"></Button>
     <br/> <br/>
     </form>
     <br/> <br/>
    </Card>
    {(messg) && <Error title={messg.title} msg={messg.msg} onClose={closeHandler}/>}
    </React.Fragment>
)
}

export default Signup;