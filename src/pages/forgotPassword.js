import { useState } from "react";
import Card from "../themes/card";
import ResetViaEmailCard from "../themes/resetViaEmailCard";
import ResetViaSMSCard from "../themes/resetViaSMSCard";
import Button from "../themes/button";
import { buttonStyle } from "../styles";
import { useSelector } from "react-redux";
const ForgotPassword = () => {
  const [email, setEmail] = useState(null);
  const theme = useSelector((state) => state.themes.theme);

  return (
    <>
      <div className={`${theme==='light'?"bg-[#f5f5f5]": "dark:bg-gray-800"} pt-[80px] `}>
        <Card
          outerDivClassName="flex min-h-screen items-center justify-center from-teal-100"
          className={`${theme==='light'?"bg-white": "dark:bg-gray-700"} h-768 w-640 max-w-640  rounded-[30px] mx-[20px] px-10 py-8`}
        >
          <h1 className={`${theme==='light'?"text-heading-color": "dark:text-white"} text-center text-[30px] font-bold`}>
            Forgot Password
          </h1>
          <p className="text-center text-[14px] mt-[20px] text-tcolor font-medium">
            Please select option to send link reset password
          </p>
          {/* mail link */}
          <div className="mt-[42px]">
            <ResetViaEmailCard theme={theme} email={email} setEmail={setEmail} />
          </div>

          {/* SMS Link */}
          <div className=" ">
            <ResetViaSMSCard theme={theme}/>
          </div>
          <div className="pt-4">
            <Button
              handleClick={() => alert("Emial: " + email)}
              type="submit"
              className={`${theme==='light'?"bg-[#F8AD15]":"bg-gray-800 border border-gray-300 hover:bg-gray-900"} ${buttonStyle}  mt-[42px]`}
              buttonText="Send Link Reset Password"
            />
          </div>
          <button className="flex mt-[33px] items-center justify-center text-tcolor font-medium">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.71636 0.636998C5.71648 0.504289 5.67518 0.374864 5.59825 0.266834C5.52131 0.158804 5.41259 0.0775764 5.2873 0.0345177C5.16201 -0.00854099 5.02642 -0.0112757 4.8995 0.0266962C4.77258 0.0646681 4.66069 0.141447 4.57948 0.246287L0.133574 5.97333C0.0468439 6.08503 -0.000244141 6.22252 -0.000244141 6.36404C-0.000244141 6.50556 0.0468439 6.64305 0.133574 6.75475L4.57948 12.4818C4.66069 12.5866 4.77258 12.6634 4.8995 12.7014C5.02642 12.7394 5.16201 12.7366 5.2873 12.6936C5.41259 12.6505 5.52131 12.5693 5.59825 12.4612C5.67518 12.3532 5.71648 12.2238 5.71636 12.0911V9.55209C9.13272 9.62336 10.7739 10.2731 11.5983 10.9794C12.382 11.6507 12.5256 12.4404 12.6748 13.2677L12.7136 13.4808C12.7421 13.6334 12.8252 13.7702 12.9474 13.8656C13.0696 13.961 13.2223 14.0084 13.3769 13.9989C13.5315 13.9893 13.6773 13.9235 13.7868 13.8138C13.8964 13.7041 13.9622 13.5581 13.9718 13.4032C14.0804 11.6546 13.9171 9.12066 12.6844 7.00101C11.4878 4.94373 9.33278 3.3618 5.71636 3.19635V0.636998Z"
                fill="#C4C4C4"
              />
            </svg>

            <span className="ml-[8px] text-[14px]">Back to Sign in</span>
          </button>
        </Card>
      </div>
    </>
  );
};

export default ForgotPassword;
