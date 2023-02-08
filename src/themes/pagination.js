import { useEffect, useState } from "react";
import { NextArrowIcon, PreviousArrowIcon } from "../assets/icons";
import useWindowDimensions from "../hooks/useWindowDimensions"

const Pagination = (props) => {
  const pageNumbers = [];
  const {  width } = useWindowDimensions();

  for (let i = 1; i <= Math.ceil(props.totalData / props.dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNext = () => {
    props.currentPage !== pageNumbers.length &&
      props.paginate(props.currentPage + 1);
  };

  const handlePrevious = () => {
    props.currentPage !== pageNumbers[0] &&
      props.paginate(props.currentPage - 1);
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="flex text-gray-700">
        {/* Previous */}
        <div
          onClick={handlePrevious}
          className={`${
            props.currentPage === pageNumbers[0]
              ? "cursor-not-allowed "
              : "cursor-pointer text-dropdown-text-color hover:bg-yellow-light hover:text-white"
          } h-8 w-8 flex justify-center items-center rounded-[10px] font-semibold `}
        >
          <PreviousArrowIcon />
        </div>

        {/* Page Numbers */}
        {width > 978 && (
          <div className="md:visible flex flex-row gap-[14px] font-semibold rounded-full ">
            {pageNumbers.map((number,index) => {
              var activeClass =
                props.currentPage === number
                  ? "bg-yellow-light text-white "
                  : "bg-[#EFF2F2] text-dropdown-text-color  ";
              return (
                <span key={index}>
                  <div
                    key={number}
                    className={`${activeClass} h-8 w-8 md:hidden lg:flex justify-center items-center cursor-pointer hidden text-[10px] transition duration-150 ease-in  rounded-[10px] font-semibold focus:bg-yellow-light focus:text-white hover:bg-yellow-light  hover:text-white`}
                    onClick={() => props.paginate(number)}
                  >
                    {number}
                  </div>
                </span>
              );
            })}
          </div>
        )}
        {/* For Small Screen Only */}
        <div className=" lg:hidden  h-8 w-8 flex justify-center items-center cursor-pointer  text-[10px] transition duration-150 ease-in  rounded-[10px] font-semibold bg-yellow-light text-white">
          {props.currentPage}
        </div>
        {/* Next Button */}

        <div
          onClick={handleNext}
          className={`${
            props.currentPage === pageNumbers[pageNumbers.length - 1]
              ? "cursor-not-allowed"
              : "cursor-pointer  text-dropdown-text-color   hover:bg-yellow-light  hover:text-white"
          } h-8 w-8 flex justify-center items-center rounded-[10px] font-semibold`}
        >
          <NextArrowIcon />
        </div>
      </div>
    </div>
  );
};
export default Pagination;
