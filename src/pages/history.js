import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SearchIcon } from "../assets/icons";
import Card from "../themes/card";
import Filter from "../themes/filter";
import Table from "../themes/table";
import TopSection from "../themes/topSection";
import { sortByFilter } from "../utilities/sortingFunctionalities";

const History = () => {
  const [activeMenu, setActiveMenu] = useState(false); // managing profile dropdown menu of table
  const theme = useSelector((state) => state.themes.theme);

  const [search, setSearch] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  const [filteredData, setFilteredData] = useState(
    JSON.parse(localStorage.getItem("transection"))
  );
  const [wordEntered, setWordEntered] = useState("");

  const [sortField, setSortFiled] = useState("");
  function SearchFilter(data) {
    if (data)
      return data.filter((value) => {
        return value.name.toLowerCase().includes(wordEntered.toLowerCase());
      });
  }

  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem("transection"));
    let result = SearchFilter(getData?getData: []); // to apply search
    result = sortByFilter(result, sortBy, isFilterClicked ? "asc" : "dsc"); // to apply sort by filter
    setFilteredData(result);
    if (search === "") {
      setFilteredData(JSON.parse(localStorage.getItem("transection")));
    }
    let sort =
      sortBy.toLowerCase() === "name"
        ? sortBy.toLowerCase()
        : sortBy.toLowerCase() === "transfer date"
        ? "transferDate"
        : null;
    setSortFiled(sort);
  }, [search, sortBy, isFilterClicked]);
  return (
    <>
      <div className="">
        {/* <div className="xsm:bg-green-800 sm:bg-green-400 md:bg-green-100 lg:bg-red-300 xl:bg-red-500 2xl:bg-red-900"> */}
        <TopSection
          heading="History Transfer"
          subHeading="see history a transfer from user to user and from admin to users"
          headingClass={`${theme==='light'?"text-heading-color": "text-white"} text-[20px] font-semibold mt-[37px] ml-[36px]`}
          subHeadingClass="mt-[8px] ml-[36px] text-tcolor text-[14px] font-normal"
          setActiveMenu={setActiveMenu}
          activeMenu={activeMenu}
        />
      </div>
      {/* for Card */}
      <div className="">
        {/* Table Card */}
        <Card
          className={`${theme==='light'?"bg-white":"bg-gray-800"} pb-[42px] rounded-[30px] w-full`}
          outerDivClassName="ml-[36px] mr-[24px] my-[36px]  "
        >
          <div className="flex justify-center md:justify-start">
          <h1 className={`${theme==='light'?"text-table-header-color": "text-white"} sm:pl-[0px] text-[24px]   font-semibold pt-[47px] md:pl-[36px] `}>
              Transfer Users to Users
            </h1>
          </div>
          <div>
            <p className="mr-[36px] lg:mr-1 ml-[36px]  text-[14px] text-label-text-color">
              Select one or more that you want to transfer
            </p>
          </div>
          <div className=" flex flex-col items-center justify-end ml-[36px] mr-[41px] mb-[38px] md:flex-row ">
            <div className="sm:items-center sm:justify-between sm:px-[34px]  md:mt-[24px] flex flex-col md:flex-row md:float-right md:pl-[70px] md:pr-[34px] lg:float-right ">
              <span className="xsm:pt-[50px] md:p-0 w-full md:w-auto">
                <span className=" absolute mt-[11px] ml-[15px] z-1">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  className={
                    "pl-[43px] pb-[10px] pt-[9px] xsm:w-full rounded-[14px] shadow-md text-[14px] font-normal text-label-text-color"
                  }
                  placeholder={"Search..."}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setWordEntered(e.target.value);
                  }}
                />
              </span>

              <span className="xsm:pt-[50px] md:p-0 ml-[0px] md:ml-[24px] md:mr-[24px] w-full md:w-[180px]">
                <Filter
                  positioningClass="mt-[34px] "
                  selectClass="font-semibold rounded-full text-[14px] xsm:w-full py-[9px] pl-[18px] pr-[37px]  bg-dropdown-bg-color border-transparent "
                  selectMenuItems={["Name", "Transfer Date"]}
                  label="Sort by"
                  iconStyle="right-[17.25px] mt-[15px]"
                  value={sortBy}
                  setValue={setSortBy}
                  // to datact and set the click on option
                  setIsFilterClicked={setIsFilterClicked}
                  isFilterClicked={isFilterClicked}
                />
              </span>
            </div>
          </div>
          <Table
            className="ml-[32px] mr-[41px] pb-[27px]  rounded-[15px]"
            widthClass="w-full"
            data={filteredData}
            setData={setFilteredData}
            columns={[
              { label: "Sender", accessor: "name", sortAble: true },
              { label: "Receiver", accessor: "name1", sortAble: false },
              {
                label: "Transfer Date",
                accessor: "transferDate",
                sortAble: true,
              },
            ]}
            dataPerPage={6}
            forHistoryPageTable1={true}
            sortField={sortField}
            // to detact the filter order
            filterOrder={isFilterClicked ? "asc" : "desc"}
          />
        </Card>
      </div>
    </>
  );
};

export default History;
