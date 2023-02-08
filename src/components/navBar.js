import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DarkModeIcon, LightModeIcon, NavIcon } from "../assets/icons";
import { changeTheme } from "../redux/actions/themeActions";
import LanguageSelector from "./languageSelector";

export default function Navbar({ selectedTheme, setSeletedTheme }) {
  const lng = useSelector((state) => state.languages.language);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themes.theme);
  return (
    // className="xsm:bg-green-700 sm:bg-green-400 md:bg-green-100 lg:bg-red-300 xl:bg-red-500 2xl:bg-red-900"
    <div className={`${theme==='light'?"bg-yellow":"bg-gray-900"} fixed w-full z-50`}>
      <nav className="  flex  items-center justify-between py-3 ">
        <div className="w-full  flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-sm font-bold leading-relaxed inline-block pl-4 mr-4 py-2 whitespace-nowrap uppercase text-white"
            to={lng === `in` ? `in/` : `/`}
          >
            IBack Care
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <NavIcon />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen
              ? (theme==='light'?"left-[-63px] bg-yellow-light absolute w-full top-[63px]":"left-[-63px] bg-gray-900 absolute w-full top-[63px]")
              : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col justify-center items-center lg:flex-row list-none lg:ml-auto">
            {!localStorage.getItem("isAuthenticated") && (
              <>
                <li>
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={lng === "in" ? "/in/login_admin" : "/login_admin"}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={lng === "in" ? "/in/reset_password" : "/reset_password"}
                  >
                    Reset Password
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={
                      lng === "in" ? "/in/forgot_password" : "/forgot_password"
                    }
                  >
                    Forgot Password
                  </Link>
                </li>
                <li>
                  <LanguageSelector theme={theme} />
                </li>
              </>
            )}
            <li className={`${navbarOpen&&"my-3"}`}>
              <button
                type="button"
                className={`${
                  theme === "dark" ? "bg-gray-700" : "bg-white"
                } w-9 h-9 inline-flex justify-center items-center mr-[10px] rounded-md border border-gray-300  text-sm leading-5 font-medium text-white `}
                onClick={() => {
                  
                  if (theme === "dark") {
                    dispatch(changeTheme("light"));
                  } else {
                    dispatch(changeTheme("dark"));
                  }
                }}
              >
                {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
