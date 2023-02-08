const Button = (props) => {
  return (
    <>
      <span className={`flex flex-col  items-center justify-center ${props.widthClass}`}>
        <button
          
          type="submit"
          className={`${props.className}`}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          onClick={props.handleClick}
        >
          {props.buttonText}
        </button>
      </span>
    </>
  );
};

export default Button;
