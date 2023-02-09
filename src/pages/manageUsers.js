import Card from "../themes/card";
import Table from "../themes/table";
import { SearchIcon } from "../assets/icons";
import Filter from "../themes/filter";
import { useEffect, useState } from "react";
import TopSection from "../themes/topSection";
import Button from "../themes/button";
import {
  SearchFilter,
  sortByFilter,
} from "../utilities/sortingFunctionalities";
import { useSelector } from "react-redux";

const ManageUsers = () => {
  const theme = useSelector((state) => state.themes.theme);

  const reduxUsers = useSelector((state) => state.users.users);

  const [sortBy, setSortBy] = useState("");
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [search, setSearch] = useState(undefined);
  const [sortField, setSortFiled] = useState("createdAt");

  const [filteredData, setFilteredData] = useState(reduxUsers);
  const [wordEntered, setWordEntered] = useState("");

  const [addNewUserClicked, setAddNewUserClicked] = useState(false);

  // to handle table filters (Search, sortby, and filterby)
  useEffect(() => {
    let result = SearchFilter(reduxUsers, wordEntered); // to apply search

    result = sortByFilter(result, sortBy, isFilterClicked ? "asc" : "dsc"); // to apply filter
    setSortFiled(
      (sortBy.toLowerCase() === "name" ||
        sortBy.toLowerCase() === "balance" ||
        sortBy.toLowerCase() === "createdAt" ||
        sortBy.toLowerCase() === "Time") &&
        sortBy.toLowerCase()
    );

    setFilteredData(result);
  }, [search, sortBy, isFilterClicked]);

  return (
    <>
      {/* <div className="xsm:bg-green-700 sm:bg-green-400 md:bg-green-100 lg:bg-red-300 xl:bg-red-500 2xl:bg-red-900"> */}
      <div>
        <TopSection
          heading="Manage Users"
          subHeading="Manage and organize your users"
          headingClass={`${theme==='light'?"text-heading-color": "text-white"} text-[20px] font-semibold mt-[37px] ml-[36px]`}
          subHeadingClass="mt-[8px] ml-[36px] text-tcolor text-[14px] font-normal"
        />
      </div>

      <Card
        className={`${theme==='light'?"bg-white":"bg-gray-800"} pb-[42px] rounded-[30px] w-full`}
        outerDivClassName="mx-[8px] py-[4px] md:mx-[36px] md:my-[36px]"
      >
        <div className="md:flow-root ">
          <div className="md:float-left flex justify-center">
            <h1 className={`${theme==='light'?"text-table-header-color": "text-white"} sm:pl-[0px] text-[24px]   font-semibold pt-[47px] md:pl-[36px] `}>
              User List
            </h1>
          </div>
          
          <div className="sm:items-center sm:justify-between xsm:px-5  md:mt-[34px] flex flex-col md:flex-row md:float-right md:pl-[70px] md:pr-[34px] lg:float-right ">
            <span className="xsm:pt-[50px]  md:p-0 w-full md:w-auto">
              <span className=" absolute mt-[11px] ml-[15px] z-1">
                <SearchIcon />
              </span>
              <input
                type="text"
                className={
                  "pl-[43px] pb-[10px] pt-[9px] xsm:w-full rounded-full shadow-md text-[14px] font-normal text-label-text-color"
                }
                placeholder={"Search..."}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setWordEntered(e.target.value);
                }}
              />
            </span>

            <span className="xsm:my-[50px] md:p-0 ml-[0px] md:ml-[24px] md:mr-[24px] w-full md:w-[150px]">
              <Filter
                positioningClass="mt-[34px] "
                selectClass="font-semibold rounded-full text-[14px] xsm:w-full py-[9px] pl-[18px] pr-[37px]  bg-dropdown-bg-color border-transparent "
                selectMenuItems={["Name", "Balance", "createdAt"]}
                label="Sort by"
                iconStyle="right-[17.25px] mt-[15px]"
                value={sortBy}
                setValue={setSortBy}
                setIsFilterClicked={setIsFilterClicked}
                isFilterClicked={isFilterClicked}
              />
            </span>

            <span
              className={"w-full md:w-1/3 sm:mt-[50px]  md:m-0  md:mr-[5px]"}
            >
              <Button
                buttonText={"Add User"}
                handleClick={() => {
                  setAddNewUserClicked(true);
                }}
                className={`text-[15px] text-white font-semibold inline-block rounded-full bg-[#F8AD15]  w-full  h-[40px]   ease-in-out`}
              />
            </span>
          </div>
        </div>
        <Table
          className="mt-[33px] mx-[36px] pb-[27px] rounded-[15px]"
          widthClass="w-full"
          data={filteredData}
          setData={setFilteredData}
          dataPerPage={10}
          forManageUsersPage={true}
          columns={[
            { label: "Name", accessor: "name", sortAble: true },
            { label: "Email", accessor: "email", sortAble: true },
            { label: "Account Number", accessor: "account", sortAble: true },
            { label: "Balance", accessor: "balance", sortAble: true },
            { label: "Branch", accessor: "branch", sortAble: true },
            { label: "Swift Code", accessor: "swiftCode", sortAble: true },
            { label: "Time", accessor: "createdAt", sortAble: true },
            { label: "Action", accessor: "action", sortAble: false },
          ]}
          // to open sidebar in tabel after clicking on add button
          addNewUserClicked={addNewUserClicked}
          setAddNewUserClicked={setAddNewUserClicked}
          sortField={sortField}
          // to detact the filter order
          filterOrder={isFilterClicked ? "asc" : "desc"}
        />
      </Card>
    </>
  );
};

export default ManageUsers;
