import Card from '../UI/Card';
import './Form.css';
import Button from '../UI/Button';
import {useState} from 'react';
import Error from './Error';

function Form(props){
    
const[data,setData]=useState({
    inputName:'',
    inputAge:''
})

const[error,setError]=useState(false);

function nameHandler(event){
    setData((prevData)=> {
        return { ...prevData,inputName:event.target.value }
    })
}

function ageHandler(event){
setData((prevData)=> {
    return { ...prevData,inputAge:event.target.value }
})
}

function formSubmit(event){
    event.preventDefault();
    if(data.inputName.trim().length===0 || data.inputAge.trim().length===0)
    {
       return setError({
            title:'Invalid Input',
            msg:'Please enter a valid name and age'
        })
         }
    if(data.inputAge < 1)
    {
        return setError({
            title:'Invalid Age',
            msg:'Please enter a valid age (age > 0)'
        })
    }
         props.prop(data);
     setData({
        inputName:'',
        inputAge:''
     })
}

    function closeHandler(){
        setError(false);
    }

   

return (
    <div className="bodys">
    <Card className="container">
    <form onSubmit={formSubmit}>
    <label> Username </label>
     <input onChange={nameHandler} value={data.inputName} type="text"/>
     <br/> <br/>
     <label> Age</label>
     <input  onChange={ageHandler} value={data.inputAge} type="number"/>
     <Button className="submit" type="submit" text="Add User"/>
     </form>
    </Card>
    {(error) &&<Error title={error.title} msg={error.msg} onClose={closeHandler} />}
    </div> 
)
}

export default Form;