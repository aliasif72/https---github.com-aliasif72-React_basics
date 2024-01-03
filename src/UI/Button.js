import './Button.css';

function Button(props){

return(
    <button className={props.className} onClick={props.onClose} type={props.type}>{props.text}</button>
)
}

export default Button;