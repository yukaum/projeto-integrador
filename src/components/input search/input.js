const Input = (props) => {
      
    return (
        <input
        className={props.class}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder} >
        </input>
    );
};

export default Input;



