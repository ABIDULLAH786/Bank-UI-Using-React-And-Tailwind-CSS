import { useEffect, useState } from "react";
import { inputDefaultStyle, inputFocuseStyle } from "../styles";
import Field from "./field";

const Modal = ({ open, setOpen,setConfirmDelete }) => {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState(false);

  function handleDelete(){
    setOpen(!open)
    setConfirmDelete(true)
  }
  useEffect(() => {
    if (value === "Delete") {
      setConfirm(true);
    }else{
      setConfirm(false);

    }
  }, [value]);
  return (
    <>
      {open && (
        <div
          id="popup-modal"
          tabindex="-1"
          className="fixed flex justify-center items-center top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
          <div className="relative  w-full h-full max-w-md md:h-auto  rounded-lg shadow-2xl">
            <div className="relative  bg-white rounded-lg shadow  dark:bg-gray-700">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 text-[#f8ad15] w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-xl font-medium text-gray-500 dark:text-gray-400">
                  Are you absolutely sure?
                </h3>
                <p className="mb-5 text-lg font-normal text-gray-500">
                  Please type <strong>Delete</strong> to confirm.
                </p>

                <Field
                  inputStyleClasses={`text-[17px] text-[#919499] font-normal block  w-full rounded-[10px] border-[1.3px]  border-[#C4C4C480] h-[50px]  pl-8 transition ease-in-out  ${inputFocuseStyle}  dark:focus:bg-gray-70 dark:bg-gray-700 mt-3 mb-3  `}
                  type="text"
                  value={value}
                  setValue={setValue}
                />
                <br/>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white disabled:cursor-not-allowed bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  disabled={!confirm ? true : false}
                  onClick={handleDelete}
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => setOpen(!open)}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-yellow hover:bg-yellow-light  focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white  dark:hover:bg-gray-600 "
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
