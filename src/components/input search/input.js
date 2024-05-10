const Input = (props) => {
      
    return (
        <input
        className={props.className}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder} 
        id = {props.id}
        name ={props.name}>
        </input>
    );
};

export default Input;



