import { useEffect, useRef, useState } from "react";
import { inputDefaultStyle, inputFocuseStyle } from "../styles";
import Field from "./field";

const ResetViaEmailCard = (props) => {
  const [emailBoxSelected, setEmailBoxSelected] = useState(false);

  const emailRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (event) => {
    if (emailRef.current && !emailRef.current.contains(event.target)) {
      setEmailBoxSelected(false);
    } else {
      setEmailBoxSelected(true);
    }
  };
  return (
    <>
      <button
        ref={emailRef}
        className="w-full rounded-[14px] px-7 pt-[35px]  pb-[35px]  py-[124px]  border-2 border-solid focus:border-cyan-600 focus:shadow-md"
      >
        <div className="w-full  flex  sm:flex-row items-center sm:gap-0">
          <span className="forgot-pg-icon">
            {" "}
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="28"
                cy="28"
                r="28"
                fill={`${emailBoxSelected ? `#298097` : `#98A0B233`}`}
                fill-opacity="0.7"
              />
              <path
                d="M32.9394 19C34.2804 19 35.5704 19.53 36.5194 20.481C37.4694 21.43 38.0004 22.71 38.0004 24.05V31.95C38.0004 34.74 35.7304 37 32.9394 37H23.0604C20.2694 37 18.0004 34.74 18.0004 31.95V24.05C18.0004 21.26 20.2594 19 23.0604 19H32.9394ZM34.0704 24.2C33.8604 24.189 33.6604 24.26 33.5094 24.4L29.0004 28C28.4204 28.481 27.5894 28.481 27.0004 28L22.5004 24.4C22.1894 24.17 21.7594 24.2 21.5004 24.47C21.2304 24.74 21.2004 25.17 21.4294 25.47L21.5604 25.6L26.1104 29.15C26.6704 29.59 27.3494 29.83 28.0604 29.83C28.7694 29.83 29.4604 29.59 30.0194 29.15L34.5304 25.54L34.6104 25.46C34.8494 25.17 34.8494 24.75 34.5994 24.46C34.4604 24.311 34.2694 24.22 34.0704 24.2Z"
                fill={`${emailBoxSelected ? `white` : `#919499`}`}
              />
            </svg>
          </span>

          <div className="msm:ml-[16px] text-left">
            <h4
              className={`${
                (emailBoxSelected) ? (props.theme==='light'?"text-[#034B5E]":"text-white") : "text-[#98A0B2]"
              }  pb-[6px] text-[18px] font-semibold`}
            >
              Reset via Email
            </h4>
            <span className="text-tcolor text-[14px]  font-medium">
              We will send a link to reset your password{" "}
            </span>
          </div>
        </div>
        {emailBoxSelected && (
          <Field
            type="text"
            inputStyleClasses={`${props.theme==='light'?"bg-white focus:text-gray-700": "dark:bg-gray-500 focus:text-white"} ${inputDefaultStyle} ${inputFocuseStyle} mt-[33px]`}
            placeholder={"Email"}
            value={props.email}
            setValue={props.setEmail}
          />
        )}
      </button>
    </>
  );
};

export default ResetViaEmailCard;
