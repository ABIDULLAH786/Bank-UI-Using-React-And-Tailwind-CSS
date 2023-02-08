import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const ObjectField = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {!props.labelNone && (
        <label className={props.labelStyleClasses}>{props.label}</label>
      )}
      {props.type === "password" ? (
        <div className="relative mb-6 mt-3 flex flex-col items-center justify-center">
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
      ) : (
        <input
          className={props.inputStyleClasses}
          placeholder={props.placeholder}
          onChange={(e) => props.setValue(e.target.value)}
          value={props.value}
        />
      )}
    </>
  );
};

export default ObjectField;
