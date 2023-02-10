import { useEffect, useRef, useState } from "react";
import { BellIcon } from "../assets/icons";

const TopSection = (props) => {

  const [activeMenu, setActiveMenu] = useState(false)
  const activeRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (event) => {
    if (activeRef.current && !activeRef.current.contains(event.target)) {
      setActiveMenu(false);
    } 
  };

  return (
    <div className="flow-root ">
      <div className="float-left">
        <h1 className={props.headingClass}>{props.heading}</h1>
        <p className={props.subHeadingClass}>{props.subHeading}</p>
      </div>

      {/* for user profile icon */}
      <div className=" float-right flex flex-row justify-end mt-[40px]">
        <span>
          <BellIcon />
        </span>
        <span

          className="ml-[-15px] mr-[36px]"
          onClick={() => setActiveMenu(true)}
        >
          <img src="/images/user avatart.png" alt="user avatar" />
        </span>
        {activeMenu && (
          <nav 
          ref={activeRef}
          class="absolute right-35  mt-[50px]  z-20 w-28 py-2 origin-top-right bg-white rounded-md shadow-xl">
            <ul className="text-dropdown-text-color">
              <li
                onClick={() => {
                  alert("edit profile");
                  setActiveMenu(false);
                }}
                className="pl-5 px-2 py-1 text-sm cursor-default  capitalize transition-colors duration-300 transform"
              >
                Edit Profile
              </li>
              <li
                onClick={() => {
                  setActiveMenu(false);
                  alert("Logout");
                }}
                className="pl-5 px-2 py-1 text-sm cursor-default capitalize transition-colors duration-300 transform"
              >
                Logout
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default TopSection;
