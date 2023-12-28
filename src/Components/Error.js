import Card from "../UI/Card";
import Button from '../UI/Button'

function Error(props){
return(
         <Card className="error">
        <h2 >{props.title}</h2>
        <p>{props.msg}</p> 
        <Button className="close" type="button" onClose={props.onClose} text="okay"/>
    </Card>
    )
    }

    export default Error;