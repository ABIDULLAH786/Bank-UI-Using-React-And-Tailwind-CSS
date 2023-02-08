import { useState } from "react";
import { DropdownIcon } from "../assets/icons";

const Dropdown = (props) => {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <span className={`${props.ddPositionClass} dropdown`}>
        <button className={props.ddButtonClass} onClick={handleDropDown}>
          {props.label}
          <span className="absolute ml-[10px] mr-[27.5px] py-[7px]">
            <DropdownIcon />
          </span>
        </button>
        <div
          id="dropdown"
          className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
            {props.items.map((ddItem, index) => (
              <li>
                <a key={index} className="block py-2 px-4 hover:bg-gray-100">
                  {ddItem}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </span>
    </>
  );
};

export default Dropdown;
