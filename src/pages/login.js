import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buttonStyle,
  inputDefaultStyle,
  inputFocuseStyle,
  inputLabelStyle,
} from "../styles";
import Button from "../themes/button";
import Card from "../themes/card";
import Field from "../themes/field";
import ReadString from "../components/readFile";
import { loginUser } from "../redux/actions/authActions";
const Login = () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  
  const theme = useSelector((state) => state.themes.theme);
  const [login, setLogin] = useState(false);
  const [credentials, setCredentials] = useState({});

  const handleSubmit = async (e) => {
    console.log(credentials)
    alert(`${email.toLowerCase()} === ${credentials[0]}`)
    alert(`${password.toLowerCase()} === ${credentials[1]}`)
    //if username or password field is empty, return error message
    if (email === "" || password === "") {
      setErrorMessage(() => ({
        value: "Empty email/password field",
      }));
    } else if (
      email.toLowerCase() == credentials[0] &&
      password == credentials[1]
    ) {
      alert("Login successful")
      //Signin Success
      localStorage.setItem("isAuthenticated", user.isLoggedIn);
      dispatch(loginUser("admin"));

      window.location.pathname = "/dashboard";
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid email/password" }));
      return;
    }
  };

  useEffect(() => {
    setErrorMessage((prevState) => ({
      value: "",
    }));
  }, [email, password]);

  return (
    <>
      <div className={`${theme==='light'?"bg-[#f5f5f5]": "dark:bg-gray-800"} pt-[80px]`}>
        <Card
          className={` ${theme==='light'?"bg-white": "dark:bg-gray-700"} h-547 w-640   rounded-[30px]   mx-[20px] px-10 py-8`}
          outerDivClassName="flex min-h-screen items-center justify-center from-teal-100"
        >
          <h1
            className={` ${theme==='light'?"text-heading-color": "dark:text-white"} pb-55 text-center text-[30px] font-bold `}
          >
            Login as Administrator
          </h1>

          {/* mail input & label */}
          <Field
            inputStyleClasses={` ${theme==='light'?"bg-white focus:text-gray-700": "dark:bg-gray-500 focus:text-white"} ${inputDefaultStyle} ${inputFocuseStyle}  mt-3 mb-3  `}
            labelStyleClasses={` ${inputLabelStyle} ` }
            type="text"
            label={"Email"}
            placeholder={"Email"}
            value={email}
            setValue={setEmail}
          />
          <Field
            type="password"
            label={"Password"}
            placeholder={"Password"}
            value={password}
            setValue={setPassword}
            inputStyleClasses={`${theme==='light'?"bg-white focus:text-gray-700": "dark:bg-gray-500 focus:text-white"} ${inputDefaultStyle} ${inputFocuseStyle} mt-3`}
            labelStyleClasses={`${inputLabelStyle}`}
          />
          <div
            className={
              errorMessage.value ? `text-red-600 mt-[30px] -mb-[30px]` : ""
            }
          >
            {errorMessage.value}
          </div>
          <Button
            buttonText={"Sign in"}
            className={`${theme==='light'?"bg-[#F8AD15]":"bg-gray-800 border border-gray-300 hover:bg-gray-900"} ${buttonStyle}  mt-[55px]`}
            handleClick={() => {
              setLogin(true);
              handleSubmit();
            }}
          />
        </Card>
        {login && (
          <ReadString
            setLogin={setLogin}
            credentials={credentials}
            setCredentials={setCredentials}
          />
        )}
      </div>
    </>
  );
};

export default Login;
