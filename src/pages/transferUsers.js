import Card from "../themes/card";
import { CrossIcon, SearchIcon } from "../assets/icons";
import TopSection from "../themes/topSection";
import { useEffect, useState } from "react";
import Table from "../themes/table";
import { usersData } from "../assets/users";
import Field from "../themes/field";
import Button from "../themes/button";
import { SearchFilter } from "../utilities/sortingFunctionalities";
import {
  buttonStyle,
  inputDefaultStyle,
  inputFocuseStyle,
  inputLabelStyle,
} from "../styles";

import { useSelector, useDispatch } from "react-redux";
import { addTag, removeAllTags, removeTag } from "../redux/actions/tagsActions";
const TransferUsers = () => {
  const theme = useSelector((state) => state.themes.theme);


  const [activeMenu, setActiveMenu] = useState(false); // managing profile dropdown menu of table
  const [search, setSearch] = useState(null);
  const [wordEntered, setWordEntered] = useState("");
  const [filteredData, setFilteredData] = useState(
    JSON.parse(localStorage.getItem("users"))
  );
  // const [storageUsersList,setStorageUsersList] = useState();

  const [inputAmount, setInputAmount] = useState(null);
  const [filedsAreRemainingError, setFiledsAreRemainingError] = useState(null);
  const [confirmation, setConfirmation] = useState(false);

  const dispatch = useDispatch();
  const reduxTag = useSelector((state) => state.tags.tags);
  const reduxUsers = useSelector((state) => state.users.users);
  
  const [tageError, setTageError] = useState(false); // to detact that the tags is not empty

 
  const handleClick = (e, tag) => {
    if (e.target.innerText === undefined) {
      dispatch(removeTag(tag))
    }
  };
  function handleAddFromTable(email) {
    if (reduxTag && reduxTag.includes(email)) {
      dispatch(removeTag(email))
    } else {
      dispatch(addTag(email))
    }
  }

  function handleTransfer(e) {
    if (!confirmation || !inputAmount || reduxTag.length === 0) {

      setFiledsAreRemainingError(true);
      if (reduxTag.length === 0) setTageError(true);
      return;
    }

    let selectedUsers =
      usersData &&
      usersData.filter((value) => {
        let obj;
        if (reduxTag.includes(value.email)) {
          obj = { value };
          obj.value["transferDate"] = new Date().toLocaleString().split(",")[0];
        }
        return obj;
      });
    window.localStorage.setItem("transection", JSON.stringify(selectedUsers));
    setInputAmount(0);
    dispatch(removeAllTags());
  }

  useEffect(() => {
    reduxTag&&localStorage.setItem("tags", JSON.stringify(reduxTag));
  }, [reduxTag]);
  // to remove the error message when the filed data is entered
  useEffect(() => {
    setTageError(false);
    setFiledsAreRemainingError(false);
  }, [inputAmount, reduxTag]);

  useEffect(() => {
    // let users = JSON.parse(localStorage.getItem("users"));
    let result = SearchFilter(reduxUsers, wordEntered); // to apply search
    setFilteredData(result);
  }, [search]);
  return (
    <>
      <div>
        {/* <div className="sm:bg-green-400 md:bg-green-100 lg:bg-red-300 xl:bg-red-500 2xl:bg-red-900"> */}
        <TopSection
          heading="Transfer to Users"
          subHeading="Transfers balance to your users"
          headingClass={`${theme==='light'?"text-heading-color": "text-white"} text-[20px] font-semibold mt-[37px] ml-[36px]`}
          subHeadingClass="mt-[8px] ml-[36px] text-tcolor text-[14px] font-normal"
          setActiveMenu={setActiveMenu}
          activeMenu={activeMenu}
        />
      </div>

      {/* for Card */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2">
        {/* Table Card */}
        <Card
          className={`${theme==='light'?"bg-white":"bg-gray-800"} pb-[42px] rounded-[30px] w-full`}
          outerDivClassName="mx-[36px] my-[36px]  "
        >
          <div className="">
            <div className="flex justify-center md:justify-start">
              <h1 className={`${theme==='light'?"text-table-header-color": "text-white"} sm:pl-[0px] text-[24px]   font-semibold pt-[47px] md:pl-[36px] `}>
              Transfer User
              </h1>
            </div>
            <div className=" flex flex-col items-center justify-between ml-[36px] mr-[41px] mb-[38px] md:flex-row ">
              <p className="text-[14px] text-label-text-color mr-1">
                Select one or more that you want to transfer
              </p>
              <span className="sm:pt-[50px] md:p-0 w-full md:w-auto">
                <span className="absolute mt-[11px] ml-[15px] z-1">
                  <SearchIcon />
                </span>
                <span className="xsm:w-full">
                  <input
                    type="text"
                    className={
                      "pl-[43px] pb-[10px] pt-[9px]  rounded-[14px] shadow-md text-[14px] font-normal text-label-text-color"
                    }
                    placeholder={"Search..."}
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setWordEntered(e.target.value);
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
          <Table
            className="ml-[32px] mr-[41px] pb-[27px]  rounded-[15px] "
            widthClass="w-[600px] xl:w-full"
            data={filteredData}
            setData={setFilteredData}
            columns={[
              { label: "Name", accessor: "name", sortAble: true },
              { label: "Email", accessor: "email", sortAble: true },
              { label: "Account Number", accessor: "account", sortAble: true },
              { label: "Action", accessor: "action", sortAble: false },
            ]}
            forTransferPage={true}
            dataPerPage={7}
            tags={reduxTag} // to add or remove -/+ icon based on tags data if it exist add - icon else add + icon
            handleClick={handleAddFromTable} // to add or remove the username in tags by clicking on -/+ icon
          />
        </Card>

        <div>
          <Card
            className={`${theme==='light'?"bg-white":"bg-gray-800"} pb-[42px] rounded-[30px] w-full`}
            outerDivClassName="mx-[36px] my-[36px] lg:mx-[0px] lg:mr-[36px] "
          >

            <div className="px-[32px]">
              <h1 className="text[24px] text-table-header-color  font-semibold  ml-[4px]  pt-[50px]">
                Selected Users
              </h1>
              <p className="text-[14px] text-label-text-color mt-[6px] ml-[4px]">
                Here is a list username of selected users
              </p>
              <div
                className={`${
                  tageError ? "border-red-600" : "border-bordar-color-gray"
                } rounded-[15px] border-2  mt-[44px]`}
              >
                <div className="px-[15px] pt-[7px] pb-[50px]">
                  {filteredData &&
                    filteredData.map((user, index) => {
                      if (reduxTag && reduxTag.includes(user.email))
                        return (
                          <button
                            key={index}
                            onClick={(e) => {
                              !reduxTag.includes(user.email) &&
                                handleClick(e, user.email);
                            }}
                            className={`${
                              reduxTag.includes(user.email)
                                ? "bg-yellow-light text-white"
                                : "bg-pg-bg-color text-dropdown-text-color"
                            } relative rounded-full  py-[6px] px-[19px] mt-[17px] mr-[10px] text-[14px] z-10 `}
                          >
                            {user.email}
                            {reduxTag.includes(user.email) && (
                              <span
                                className="absolute -top-2 -right-2 z-10"
                                onClick={(e) => {
                                  reduxTag.includes(user.email) &&
                                    handleClick(e, user.email);
                                }}
                              >
                                <CrossIcon />
                              </span>
                            )}
                          </button>
                        );
                    })}
                </div>
              </div>
            </div>
          </Card>

          <Card
            className={`${theme==='light'?"bg-white":"bg-gray-800"} pb-[42px] rounded-[30px] w-full`}
            outerDivClassName="mx-[36px] my-[36px] lg:mx-[0px] lg:mr-[36px] "
          >
            <div className="px-[32px]">
              <h1 className="text[24px] text-table-header-color  font-semibold  ml-[4px]  pt-[50px]">
                Input Amount
              </h1>
              <p className="text-[14px] text-label-text-color font-normal mt-[6px] ml-[4px] mb-[27px]">
                Only selected users will be receive this balance
              </p>

              <span className="mx-[2px]">
                <Field
                  inputStyleClasses={`${theme==='light'?"bg-white focus:text-gray-700": "dark:bg-gray-500 focus:text-white"} ${inputDefaultStyle} ${inputFocuseStyle} mt-3 pr-5`}
                  labelStyleClasses={`${inputLabelStyle}`}
                  type="number"
                  min={0}
                  label={"Amount"}
                  placeholder={"Amount"}
                  value={inputAmount}
                  setValue={setInputAmount}
                  errorMessage={"Please enter amount greater than 0"}
                />
              </span>
              <div class="flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  name="conformation"
                  value={"Yes"}
                  onChange={(e) => {
                    setConfirmation(!confirmation);
                  }}
                  className="w-[18px] h-[18px]   border-bordar-color-gray rounded"
                />
                <label
                  htmlFor="link-checkbox"
                  className="text-[14px] text-label-text-color font-normal ml-2"
                >
                  Are you sure transfer to this users ?
                </label>
              </div>
              {filedsAreRemainingError && (
                <div className={`text-red-600 mt-5`}>
                  Please fill all the fileds before proceding the transection
                </div>
              )}
              <Button
                buttonText={"Transfer"}
                handleClick={handleTransfer}
                className={`${theme==='light'?"bg-[#F8AD15]":"bg-gray-900 border border-gray-300 hover:bg-gray-900 hover:opacity-60"} ${buttonStyle}  mt-[55px]`}
            
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TransferUsers;
