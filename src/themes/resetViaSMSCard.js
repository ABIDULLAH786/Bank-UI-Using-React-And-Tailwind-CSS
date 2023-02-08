import { useEffect, useRef, useState } from "react";

const ResetViaSMSCard = (props) => {
  const [smsBoxSelected, setSMSBoxSelected] = useState(false);

  const smsRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (event) => {
    if (smsRef.current && !smsRef.current.contains(event.target)) {
      setSMSBoxSelected(false);
    } else {
      setSMSBoxSelected(true);
    }
  };
  return (
    <>
        <button
          ref={smsRef}
          className="w-full rounded-[14px] px-7 mt-[42px] pt-[35px]  pb-[35px]  py-[124px] border-2 border-solid focus:border-cyan-600 focus:shadow-md"
        >
          <div className="max-w-md flex flex-row items-center sm:gap-0">
            <span className="forgot-pg-icon">
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
                fill={`${smsBoxSelected ? `#298097` : `#98A0B233`}`}
                fill-opacity="0.7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.0513 27.9527C31.8742 31.7745 32.7414 27.3531 35.1755 29.7854C37.5221 32.1314 38.8708 32.6014 35.8976 35.5737C35.5252 35.873 33.1591 39.4737 24.8436 31.1605C16.5271 22.8463 20.1257 20.4778 20.4251 20.1055C23.4054 17.1249 23.8673 18.4815 26.2139 20.8274C28.648 23.2608 24.2284 24.1309 28.0513 27.9527Z"
                fill={`${smsBoxSelected ? `white` : `#919499`}`}
              />
            </svg>
            </span>

            <div className="msm:ml-[16px] text-left">
              <h4 className={`${smsBoxSelected?(props.theme==='light'?"text-[#034B5E]":"text-white"): "text-[#98A0B2]"} pb-[6px] text-[18px] font-semibold`}>
                Reset via SMS
              </h4>
              <span className="text-tcolor text-[14px] font-medium">
                We will send a link to reset your phone{" "}
              </span>
            </div>
          </div>
        </button>
    </>
  );
};

export default ResetViaSMSCard;
