import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowDownIcon, ArrowUpIcon } from "../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import { setLocalLanguage } from "../redux/actions/languageActions";
import { useLocation, useNavigate } from "react-router-dom";

export default function LanguageSelector(props) {
  const languages = { en: "English", in: "Indonesian" };
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const langRedux = useSelector((state) => state.languages.language);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  function handleLanguageChange(language) {
    dispatch(setLocalLanguage(language));
    i18n.changeLanguage(language);
    const path = `${location.pathname}`;
    navigate(path);
    setIsOpen(false);
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [langRedux]);

  return (
    <div className="relative inline-block text-left mr-5">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className={`${
              props.theme === "light"
                ? "bg-yellow active:bg-yellow-light"
                : "bg-gray-700"
            } active:text-gray-100 inline-flex justify-center items-center w-[180px] rounded-md border border-gray-300 px-4 py-2 text-sm leading-5 font-medium text-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue  `}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* <img
              src={require(`../assets/images/${langRedux}.png`)}
              className="w-5 h-5"
            /> */}

            <span className="ml-3 mr-5"> {languages[langRedux]} </span>
            <span className="">
              {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </span>
          </button>
        </span>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`  absolute right-0 mt-2 w-full rounded-md shadow-lg`}
        >
          <div className="py-1 rounded-md bg-white shadow-xs">
            {Object.keys(languages).map((key) => (
              <button
                key={key}
                type="button"
                className="flex items-center px-4 w-full text-left py-2 text-sm leading-5 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                onClick={() => {
                  handleLanguageChange(key);
                }}
              >
                <span>
                  <img
                    src={require(`../assets/images/${key}.png`)}
                    className="w-10 h-10"
                  />
                </span>
                <span className="align-middle ml-5 font-medium">
                  {languages[key]}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
