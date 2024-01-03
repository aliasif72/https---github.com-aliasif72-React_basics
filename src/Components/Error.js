import Card from "../UI/Card";
import Button from '../UI/Button'
import React from "react";
import { createPortal } from 'react-dom';

function Error(props){

  return(
    <React.Fragment>
        {createPortal(
            <ModalOverlay title={props.title} msg={props.msg} onClose={props.onClose}/>,
            document.getElementById('overlays'))}
             </React.Fragment>
)
        }

        function ModalOverlay(props){
            return(
            <React.Fragment>
             <Card className="messag">
            <h2 >{props.title}</h2>
            <p>{props.msg}</p> 
            <Button className="close" type="button" onClose={props.onClose} text="okay"/>
        </Card>
        </React.Fragment>)
            }
    

  

    export default Error;