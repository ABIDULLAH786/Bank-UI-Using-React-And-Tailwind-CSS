import { useState } from "react";
import { useSelector } from "react-redux";
import { buttonStyle, inputDefaultStyle, inputFocuseStyle, inputLabelStyle } from "../styles";
import Button from "../themes/button";
import Card from "../themes/card";
import Field from "../themes/field";

const ResetPassword = () => {
  const [email, setEmail] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmNewPassword, setConfirmNewPassword] = useState(null);
  const theme = useSelector((state) => state.themes.theme);

  return (
    <>
      <div className={`${theme==='light'?"bg-[#f5f5f5]": "dark:bg-gray-800"} pt-[80px]`}>
        <Card
          outerDivClassName="flex min-h-screen items-center justify-center from-teal-100"
          className={`${theme==='light'?"bg-white": "dark:bg-gray-700"} h-662 w-640 max-w-640 max-h-662 rounded-[30px] mx-[20px] px-10 py-8`}
        >
          <h1 className={`${theme==='light'?"text-heading-color": "dark:text-white"} mb-[20px] text-center text-[30px] font-bold`}>
            Reset Password
          </h1>
          <p className={`${theme==='light'?"text-gray-700": "text-gray-100"} pb-[49px] flex flex-col items-center justify-center  opacity-40`}>
            Create your new password
          </p>

          <span className="mb-15">
            <Field
              inputStyleClasses={`${theme==='light'?"bg-white focus:text-gray-700": "dark:bg-gray-500 focus:text-white"} ${inputDefaultStyle} ${inputFocuseStyle} mt-3 mb-3  `}
              labelStyleClasses={`${inputLabelStyle}`}
              type="text"
              label={"Email"}
              placeholder={"Email"}
              value={email}
              setValue={setEmail}
            />
          </span>
          <span className="mb-15">
            <Field
              inputStyleClasses={`${theme==='light'?"bg-white focus:text-gray-700": "dark:bg-gray-500 focus:text-white"} ${inputDefaultStyle} ${inputFocuseStyle} mt-3 mb-3  `}
              labelStyleClasses={`${inputLabelStyle}`}
              type="text"
              label={"New Password"}
              placeholder={"New Password"}
              value={newPassword}
              setValue={setNewPassword}
            />
          </span>
          <span className="mb-15">
            <Field
              inputStyleClasses={`${theme==='light'?"bg-white focus:text-gray-700": "dark:bg-gray-500 focus:text-white"} ${inputDefaultStyle} ${inputFocuseStyle} mt-3 mb-3  `}
              labelStyleClasses={`${inputLabelStyle}`}
              type="text"
              label={"Confirm New Password"}
              placeholder={"Confirm New Password"}
              value={confirmNewPassword}
              setValue={setConfirmNewPassword}
            />
          </span>

          <Button
            buttonText={"Reset Password"}
            className={`${theme==='light'?"bg-[#F8AD15]":"bg-gray-800 border border-gray-300 hover:bg-gray-900"} ${buttonStyle}  mt-[42px]`}
          />
        </Card>
      </div>
    </>
  );
};

export default ResetPassword;
