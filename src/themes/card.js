const Card = (props) => {
  return (
    <>
    {/* THe outer dive is used to center a card for example we need 
    component to be in center in login screen so it can be done
     when we pass outerDivClassName to Card */}
      <div  className={props.outerDivClassName}>
        <div className={props.className}>
            {props.children}
        </div>
      </div>
    </>
  );
};

export default Card;
