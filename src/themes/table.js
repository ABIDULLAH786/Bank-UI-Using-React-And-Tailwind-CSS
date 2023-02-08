import {
  AscendingSortIcon,
  DescendingSortIcon,
  MinusIcon,
  PlusIcon,
  SortUpDownIcon,
  ThreeDotIcon,
} from "../assets/icons";
import { useEffect, useRef, useState } from "react";
import Pagination from "./pagination";
import SideEditBar from "../components/sideEditBar";
import { sortByFilter } from "../utilities/sortingFunctionalities";
import Modal from "./modal";

import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, editUser } from "../redux/actions/userActions";

const Table = (props) => {
  const theme = useSelector((state) => state.themes.theme);

  const [openForAddUser, setOpenForAddUser] = useState(false);
  const [editClicked, setEditClicked] = useState(false); // managing click on edit
  const [activeMenu, setActiveMenu] = useState(undefined); // managing tree dot dropdown menu of table
  const [currentPage, setCurrentPage] = useState(1); // defining current page by default it is 1
  const [dataPerPage] = useState(props.dataPerPage); // defining size of data per page
  const [selectedData, setSelectedData] = useState({});

  const [openModal, setOpenModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [dataToDelete, setDataToDelete] = useState();


  // Get current list/page data
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentUserList =
    props.data && props.data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // for detacting outside click
  const menuRef = useRef(null);
  useEffect(() => {
    // document.addEventListener("click", handleClickOutside, true);
  }, []);

  // redux work
  const dispatch = useDispatch();
  const myState = useSelector((state) => state);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActiveMenu(null);
    } else {
      setActiveMenu(true);
    }
  };

  const handleEdit = (email) => {
    const dataToUpdate =
      currentUserList && currentUserList.filter((user) => user.email === email);
    setSelectedData(dataToUpdate[0]);

    setEditClicked(true);
    setActiveMenu(null);
  };
  const handleDelete = async (email) => {
    if (confirmDelete) {
      let updatedData = props.data.filter((user) => user.email !== email);
      updatedData = sortByFilter(updatedData, "Time");
      props.setData(updatedData);
      localStorage.setItem("users", JSON.stringify(updatedData));
      setConfirmDelete(false);
      dispatch(deleteUser(email))

    }

    setActiveMenu(null);
    setConfirmDelete(false);
  };
  const [change, setChange] = useState();
  const [isDataUpdated, setIsDataUpdated] = useState(false);

  // Sorting work
  const [order, setOrder] = useState("asc");
  const [sortField, setSortField] = useState("");
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...props.data].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      props.setData(sorted);
    }
  };

  // Delete User
  useEffect(() => {
    handleDelete(dataToDelete);
  }, [confirmDelete]);

  // for updating user data using sidebar edit menu
  useEffect(() => {
    const objIndex =
      props.data &&
      props.data.findIndex(
        (obj) => (obj && obj.email) === (selectedData && selectedData.email)
      );
      props.data&&(props.data[objIndex] = selectedData);
      dispatch(editUser(selectedData))
    setChange(!change);
    setSelectedData({});
  }, [isDataUpdated]);

  // for adding new user data using sidebar edit menu
  const [isNewUserAdded, setIsNewUserAdded] = useState(false);
  useEffect(() => {
    if (isNewUserAdded) {
      props.data.unshift(selectedData);
      dispatch(addUser(selectedData));

      setChange(!change);
      setSelectedData({});
    }
  }, [isNewUserAdded]);

  useEffect(() => {
    setOrder(props.filterOrder);
  }, [props.filterOrder]); // to detace that add user button is clicked in manage user page
  useEffect(() => {
    function openSideBar() {
      setOpenForAddUser(true);
      setEditClicked(true);
    }
    props.addNewUserClicked && openSideBar();
  }, [props.addNewUserClicked]);

  // to detavce the outside sorby filter change and set the sortFiled accoudingly
  useEffect(() => {
    setSortField(props.sortField);
  }, [props.sortField]);
  return (
    <>
      {/* THe outer dive is used to center a table for example we need 
      component to be in center in login screen so it can be done
       when we pass outerDivClassName to table */}

      <div className={`${props.className}`}>
        <div className="overflow-auto">
          <table
            className={`table-auto border-separate  border-spacing-y-[34px] text-left  md:pl-[34px] md:mt-[37px]   ${props.widthClass}`}
          >
            <thead className=" font-semibold  text-table-header-color ">
              <tr className="  ">
                {props.columns&&props.columns.map((column, index) => (
                  <th
                    key={index}
                    className={`${theme==='light'?"text-table-header-color": "text-white"} cursor-pointer text-[14px] font-semibold `}
                    onClick={() => handleSortingChange(column.accessor)}
                  >
                    <div className="flex items-center ">
                      {column.label}
                      {column.sortAble && (
                        <span>
                          {sortField === column.accessor ? (
                            <div>
                              {order === "asc" ? (
                                <AscendingSortIcon />
                              ) : (
                                <DescendingSortIcon />
                              )}{" "}
                            </div>
                          ) : (
                            <SortUpDownIcon />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentUserList &&
                currentUserList.map((user, index) => {
                  if (props.forTransferPage) {
                    return (
                      <tr
                        key={index}
                        className={`${theme==='light'?"text-dropdown-text-color": "text-white"} text-[12px]`}
                      >
                        <td className="font-semibold">{user.name}</td>
                        <td className=" text-tcolor">{user.email}</td>
                        <td>{user.account}</td>
                        {/* This button sends data to transferUser to add it in tags */}
                        {props.forTransferPage && (
                          <td>
                            <button
                              onClick={() => {
                                props.handleClick(user.email);
                              }}
                            >
                              {props.tags&&props.tags.includes(user.email) ? (
                                <span className="text-[5px]">
                                  <MinusIcon />
                                </span>
                              ) : (
                                <span className="text-[5px]">
                                  <PlusIcon />
                                </span>
                              )}
                            </button>
                          </td>
                        )}
                      </tr>
                    );
                  }
                  if (props.forManageUsersPage) {
                    return (
                      <tr
                        key={index}
                        className={`${theme==='light'?"text-dropdown-text-color": "text-white"} text-[12px]`}
                      >
                        <td className="font-semibold">{user.name}</td>
                        <td className=" text-tcolor">{user.email}</td>
                        <td>{user.account}</td>

                        <td>{user.balance}</td>
                        <td>{user.branch}</td>
                        <td>{user.swiftCode}</td>
                        <td>{user.createdAt.split("T")[0]}</td>

                        <td className="flex flex-flow-col items-center justify-center ">
                          <button
                            onClick={(e) =>
                              activeMenu === user.email
                                ? setActiveMenu(null)
                                : setActiveMenu(user.email)
                            }
                           className="cursor-pointer z-10 block p-2 e border border-transparent rounded-mdfocus:outline-none"
                          >
                            <ThreeDotIcon />
                          </button>
                          {activeMenu === user.email && (
                            <nav
                              ref={menuRef}
                             className="absolute right-35  mt-[80px]  z-20 w-28 py-2 origin-top-right bg-page-bg-white rounded-md shadow-xl dark:bg-page-bg-white"
                            >
                              <ul className="text-dropdown-text-color">
                                <li
                                  onClick={() => {
                                    handleEdit(user.email);
                                  }}
                                  className="pl-5 px-2 py-1 text-sm cursor-default  capitalize transition-colors duration-300 transform"
                                >
                                  Edit
                                </li>
                                <li
                                  onClick={() => {
                                    setOpenModal(true);
                                    setActiveMenu(null);
                                    setDataToDelete(user.email);
                                  }}
                                  className="pl-5 px-2 py-1 text-sm cursor-default capitalize transition-colors duration-300 transform"
                                >
                                  Delete
                                </li>
                              </ul>
                            </nav>
                          )}
                        </td>
                      </tr>
                    );
                  }
                })}
              {(props.forHistoryPageTable1 || props.forHistoryPageTable2) &&
                currentUserList&&currentUserList.map((user, index) => {
                  if (props.forHistoryPageTable1) {
                    return (
                      <tr
                        key={index}
                        className={`${theme==='light'?"text-dropdown-text-color": "text-white"} text-[12px]`}
                      >
                        <td className="font-semibold">{user.name}</td>
                        <td className="font-semibold">{user.name}</td>
                        <td className="font-medium">{user.createdAt}</td>
                      </tr>
                    );
                  }
                  if (props.forHistoryPageTable2) {
                    return (
                      <tr
                        key={index}
                        className={`${theme==='light'?"text-dropdown-text-color": "text-white"} text-[12px]`}
                      >
                        <td className="font-semibold">{user.name}</td>
                        <td className="font-medium">{user.createdAt}</td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>
        </div>
        <Pagination
          totalData={props.data && props.data.length}
          dataPerPage={dataPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
        {editClicked && (
          <SideEditBar
            // for hiding the edit menu when cancel is clicked
            setEditClicked={setEditClicked}
            // Seding Object for Editing the clicked user data
            data={selectedData}
            setData={setSelectedData}
            // To detact that the updated button is cliced in the edit menu
            isDataUpdated={isDataUpdated}
            setIsDataUpdated={setIsDataUpdated}
            // to detact that the component is called for adding new user
            setOpenForAddUser={setOpenForAddUser}
            openForAddUser={openForAddUser}
            // to datact that the add new user button is clicked in the edit menu
            setIsNewUserAdded={setIsNewUserAdded}
            isNewUserAdded={isNewUserAdded}
            setAddNewUserClicked={props.setAddNewUserClicked}
            addNewUserClicked={props.addNewUserClicked}
          />
        )}

        {openModal && (
          <Modal
            open={openModal}
            setOpen={setOpenModal}
            setConfirmDelete={setConfirmDelete}
          />
        )}
      </div>
    </>
  );
};

export default Table;
