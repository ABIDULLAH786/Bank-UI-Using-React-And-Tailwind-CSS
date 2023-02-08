import { useEffect, useRef, useState } from "react";
import { EMAIL_REGEX } from "../constants";
import { buttonStyle, inputDefaultStyle, inputFocuseStyle } from "../styles";
import Button from "../themes/button";
import Card from "../themes/card";
import { balanceValidator } from "../utilities/balanceValidator";
import { nameValidator } from "../utilities/nameValidator";

function SideEditBar(props) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [validBalance, setValidBalance] = useState(false);
  const [balanceFocus, setBalanceFocus] = useState(false);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(props.data.email));
  }, [props.data.email]);

  useEffect(() => {
    setValidName(props.data.name && nameValidator(props.data.name.toString()));
  }, [props.data.name]);

  useEffect(() => {
    setValidBalance(
      props.data.balance && balanceValidator(props.data.balance.toString())
    );
  }, [props.data.balance]);

  useEffect(() => {
    setErrorMsg("");
  }, [props.data.email, props.data.name, props.data.balance]);
  function handleCancel() {
    setShowSidebar(false);
    props.setOpenForAddUser(false);
    props.setData({});
    props.setAddNewUserClicked(false);
    props.setEditClicked(false);
  }
  function handleAddUser() {
    if (
      !props.data.email ||
      !props.data.name ||
      !props.data.account ||
      !props.data.balance ||
      !props.data.branch ||
      !props.data.swiftCode
    ) {
      setErrorMsg("Please fill all required fields");
      return;
    }
    if (!validName) {
      setErrorMsg("Please enter a valid name");
      return;
    }
    if (!validEmail) {
      setErrorMsg("Please enter a valid email address");
      return;
    }
    if (!validBalance) {
      setErrorMsg("Please enter a valid amount of balance");
      return;
    }

    props.data["createdAt"] = new Date().toISOString();
    let updatedData = JSON.parse(localStorage.getItem("users"));
    updatedData.unshift(props.data);
    localStorage.setItem("users", JSON.stringify(updatedData));

    props.setOpenForAddUser(false);
    // props.setOpenForAddUser(false);
    setShowSidebar(false);
    props.setIsNewUserAdded(true);
    props.setAddNewUserClicked(false);
  }
  function handleUpdate() {
    setShowSidebar(false);
    props.setEditClicked(false);
    props.setIsDataUpdated(!props.isDataUpdated);
  }

  // for detacting outside click
  const sideBarRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
      handleCancel();
    }
  };
  return (
    <>
      <div
        ref={sideBarRef}
        className={` slideFormLeft shadow-2xl bottom-0 right-0 w-[25vw]  fixed  z-50 overflow-auto  ${
          showSidebar
            ? "translate-x-0 slideFromRightToLeft "
            : "translate-x-full "
        }`}
      >
        <Card className=" bg-white px-10 pt-10  h-screen" outerDivClassName="">
          <h1 className="pb-[40px] flex flex-col items-center justify-center text-[20px] font-bold text-heading-color">
            {props.openForAddUser ? "New User" : "Update"} Details
          </h1>

          {/* Name */}
          <div className="mb-15">
            <label className={"text-sm text-label-text-color"}>
              {"Name"}
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500"></span>
            </label>
            <input
              className={`${inputDefaultStyle} ${inputFocuseStyle} ${
                !validName && props.data.name && "border-[#fd0a0a]"
              } h-[45px] my-3 pl-3 text-gray-800`}
              placeholder={"Name"}
              onChange={(e) =>
                props.setData({ ...props.data, name: e.target.value })
              }
              type="text"
              value={props.data.name}
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
            />

            {nameFocus && (
              <p className="text-gray-400 ml-3 mb-5">
                Usernames can only have:
                <br />
                - Lowercase Letters (a-z) <br />
                - Numbers (0-9) <br />
                - Dots (.) <br />
                - Underscores (_)
                <br />
              </p>
            )}
            {nameFocus && props.data.name && !validName ? (
              <p
                className={`inline-flex text-sm font-medium text-[#fd0a0a]
            `}
              >
                Invalid Name
              </p>
            ) : (
              nameFocus &&
              props.data.name && (
                <p
                  className={`inline-flex text-sm font-medium text-green-600
              `}
                >
                  Valid name
                </p>
              )
            )}
          </div>

          {/* Email */}
          <div className="mb-15">
            <label className={"text-sm text-label-text-color"}>
              {"Email"}{" "}
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500"></span>
            </label>
            <input
              className={`${inputDefaultStyle} ${inputFocuseStyle} ${
                !validEmail && props.data.email && "border-[#fd0a0a]"
              }   disabled:cursor-not-allowed h-[45px] my-3 pl-3 text-gray-800`}
              placeholder={"email"}
              onChange={(e) =>
                props.setData({ ...props.data, email: e.target.value })
              }
              value={props.data.email}
              disabled={!props.openForAddUser ? true : false}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              type="email"
            />

            {/* Email Error Message */}
            {emailFocus && props.data.email && !validEmail ? (
              <p
                className={`inline-flex text-sm font-medium text-[#fd0a0a]
            `}
              >
                Invalid Email
              </p>
            ) : (
              emailFocus &&
              props.data.email && (
                <p
                  className={`inline-flex text-sm font-medium text-green-600
              `}
                >
                  Valid email address
                </p>
              )
            )}
          </div>

          {/* Account */}
          <div className="mb-15">
            <label className={"text-sm text-label-text-color"}>
              {"Account"}
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500"></span>
            </label>
            <input
              className={`${inputDefaultStyle} ${inputFocuseStyle} out-of-range:border-[#fd0a0a] focus:out-of-range:border-[#fd0a0a]  disabled:cursor-not-allowed h-[45px] my-3 pl-3 text-gray-800`}
              placeholder={"Account"}
              onChange={(e) =>
                props.setData({ ...props.data, account: e.target.value })
              }
              min={0}
              value={props.data.account}
              type="number"
            />
          </div>

          {/* Balance Filed */}
          <div className="mb-15">
            <label className={"text-sm text-label-text-color"}>
              {"Balance"}
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500"></span>
            </label>
            <input
              className={`${inputDefaultStyle} ${inputFocuseStyle} peer invalid:border-[#fd0a0a] focus:invalid:border-[#fd0a0a] out-of-range:border-[#fd0a0a] focus:out-of-range:border-[#fd0a0a]   disabled:cursor-not-allowed h-[45px] my-3 pl-3 text-gray-800`}
              placeholder={"Balance"}
              onChange={(e) =>
                props.setData({ ...props.data, balance: e.target.value })
              }
              type="number"
              min={0}
              step={"any"}
              value={props.data.balance}
              disabled={!props.openForAddUser ? true : false}
              onFocus={() => setBalanceFocus(true)}
              onBlur={() => setBalanceFocus(false)}
            />
            {!props.data.balance && (
              <p className="hidden peer-invalid:block text-sm font-medium text-[#fd0a0a]">
                Invalid amount entered
              </p>
            )}
            {/* Balance Error Message */}
            {balanceFocus && props.data.balance && !validBalance ? (
              <p
                className={` inline-flex text-sm font-medium text-[#fd0a0a]
            `}
              >
                Invalid amount entered
              </p>
            ) : (
              balanceFocus &&
              props.data.balance && (
                <p
                  className={`inline-flex text-sm font-medium text-green-600
              `}
                >
                  Valid amount
                </p>
              )
            )}
          </div>

          {/* Branch Field */}
          <div className="mb-15">
            <label className={"text-sm text-label-text-color"}>
              {"Branch"}
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500"></span>
            </label>
            <input
              className={`${inputDefaultStyle} ${inputFocuseStyle} disabled:cursor-not-allowed h-[45px] my-3 pl-3 text-gray-800`}
              placeholder={"Branch"}
              type="text"
              onChange={(e) =>
                props.setData({ ...props.data, branch: e.target.value })
              }
              value={props.data.branch}
            />
          </div>
          <div className="mb-15">
            <label className={"text-sm text-label-text-color"}>
              {"Swift Code"}
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500"></span>
            </label>
            <input
              className={`${inputDefaultStyle} ${inputFocuseStyle} disabled:cursor-not-allowed h-[45px] my-3 pl-3 text-gray-800`}
              type="text"
              placeholder={"Swift Code"}
              onChange={(e) =>
                props.setData({ ...props.data, swiftCode: e.target.value })
              }
              value={props.data.swiftCode}
            />
          </div>
          {setErrorMsg && (
            <p className="text-sm font-medium text-[#fd0a0a]">{errorMsg}</p>
          )}
          <Button
            handleClick={props.openForAddUser ? handleAddUser : handleUpdate}
            buttonText={`${props.openForAddUser ? "Add New User" : "Update"}`}
            className={`${buttonStyle} h-[45px] mt-[40px]`}
          />
          <Button
            buttonText={"Cancel Edit"}
            // className={
            //   "inline-block w-full rounded-[14px] bg-red-600 px-7 mt-[15px] py-3 text-[14px] font-semibold text-white  ease-in-out"
            // }
            className={`${buttonStyle}    bg-[#fd0a0a] h-[45px] my-5`}
            handleClick={handleCancel}
          />
        </Card>
      </div>
    </>
  );
}

export default SideEditBar;
