import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Field = (props) => {
  const [visible, setVisible] = useState(false);
  const [error,setError] = useState("")

  if (props.type === "number") {
    
    function handleBlur(e) {
      if (!e.target.value) {
        setError(props.errorMessage);
      }
    }
    return (
      <>
        {!props.labelNone && (
          <label className={props.labelStyleClasses}>{props.label}</label>
        )}
        <input
          type={props.type}
          min={props.min}
          max={props.max}
          className={`${props.inputStyleClasses} peer`}
          placeholder={props.placeholder}
          onChange={(e) => props.setValue(e.target.value)}
          value={props.value}
          required
          onBlur={handleBlur}
        />
        <p className="invisible peer-invalid:visible text-red-700 font-light">
          {error}
        </p>
      </>
    );
  }
  if (props.type === "text") {
    return (
      <>
        {!props.labelNone && (
          <label className={props.labelStyleClasses}>{props.label}</label>
        )}
        <input
          type={props.type}
          className={props.inputStyleClasses}
          placeholder={props.placeholder}
          onChange={(e) => props.setValue(e.target.value)}
          value={props.value}
        />
      </>
    );
  }
  if (props.type === "email") {
    return (
      <>
        {!props.labelNone && (
          <label className={props.labelStyleClasses}>{props.label}</label>
        )}
        <input
          type={props.type}
          className={props.inputStyleClasses}
          placeholder={props.placeholder}
          onChange={(e) => props.setValue(e.target.value)}
          value={props.value}
        />
      </>
    );
  }
  if (props.type === "password") {
    return (
      <>
        {!props.labelNone && (
          <label className={props.labelStyleClasses}>{props.label}</label>
        )}
        <div className="relative flex flex-col items-center justify-center">
          <input
            type={visible ? props.password : "password"}
            className={props.inputStyleClasses}
            placeholder={props.placeholder}
            onChange={(e) => props.setValue(e.target.value)}
            value={props.value}
          />
          <span className=" absolute mt-4 right-8 opacity-60">
            {visible ? (
              <AiOutlineEye size={20} onClick={() => setVisible(!visible)} />
            ) : (
              <AiOutlineEyeInvisible
                size={20}
                onClick={() => setVisible(!visible)}
              />
            )}
          </span>
        </div>
      </>
    );
  }
};

export default Field;
