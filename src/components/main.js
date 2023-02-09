import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  HelpIcon,
  HistoryIcon,
  HomeIcon,
  HrIcon, LogoDollarIcon,
  LogoIcon,
  LogOutIcon,
  ManageUserIcon,
  TransferIcon
} from "../assets/icons";
import MenuItemCard from "../themes/menuItemCard";
import { RiMenuFoldLine } from "react-icons/ri";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useSelector } from "react-redux";
const MenuGeneralItems = [
  {
    text: "Dashboard",
    icon: HomeIcon,
    path: "/dashboard",
    className: "flex items-center  mb-[33px] font-semibold group",
  },
  {
    text: "Manage Users",
    icon: ManageUserIcon,
    path: "/dashboard/manage-users",
    className: "flex items-center  mb-[33px] font-semibold group",
  },
  {
    text: "Transfer to Users",
    icon: TransferIcon,
    path: "/dashboard/transfer-to-users",
    className: "flex items-center  mb-[33px] font-semibold group",
  },
  {
    text: "History",
    icon: HistoryIcon,
    path: "/dashboard/history",
    className: "flex items-center  mb-[33px] font-semibold group",
  },
];

const Main = () => {
  const [open, setOpen] = useState(true);
  
  const {width} = useWindowDimensions();
  const theme = useSelector((state) => state.themes.theme);

  useEffect(() => {
    if(width<640){
      setOpen(false);
    }
  },[width])
  return (
    <div
      className={`${theme==='dark'&&"bg-gray-800"} ${
        open
          ? "grid grid-cols-[256px_minmax(100px,_1fr)] h-full duration-200"
          : "grid grid-cols-[60px_minmax(100px,_1fr)] h-full duration-200"
      }`}
    >
      {/* Sidebar */}
      <div
        className={` ${
          open ? "w-[256px]" : "w-[60px] "
        } h-screen mt-[61px]  `}
      >
        <div className="relative duration-700">
          <span
            className={`fixed flex items-center justify-center text-white bg-yellow-light cursor-pointer  h-9 w-9 text-2xl border-dark-purple
            rounded-full mt-[40px] duration-200 ${!open && "rotate-180"} ${
              !open ? "left-[40px] " : "left-[240px]"
            }`}
            onClick={() => setOpen(!open)}
          >
            <RiMenuFoldLine />
          </span>
        </div>
        <div className={`${open?"overflow-y-auto":"overflow-hidden"}  fixed top-20 bottom-0`}>
          {open && (
            <div className={`ml-[39px] mt-[20px] ease-in-out`}>
              <h1 className={``}>
                {/* Logo */}
                <LogoIcon />
              </h1>
            </div>
          )}

          {!open && (
            <div className={` mt-[19px] ease-in-out ${open && "scale-0"}`}>
              <h1 className={``}>
                {/* Logo Small */}
                <LogoDollarIcon />
              </h1>
            </div>
          )}

          <ul className="pt-[52px] ">
            {open && (
              <li
                className={`${theme==='light'?"text-heading-color": "text-white"} ${
                  open ? "  ml-[38px]" : "ml-[1px]"
                } text-[14px] mb-[31px] font-semibold `}
              >
                General
              </li>
            )}
            {MenuGeneralItems.map((item) => {
              return (
                <MenuItemCard
                  open={open}
                  to={item.path}
                  className={item.className}
                  itemLabel={item.text}
                  svg={item.icon}
                />
              );
            })}
          </ul>
          <div className="pt-[31px] ml-[20px] ">
            <HrIcon open={open} />
          </div>
          <div className="space-y-[340px]">
            <ul className="pt-[36.5px]">
              {open && (
                <li
                  className={` ${theme==='light'?"text-heading-color": "text-white"} ${
                    open ? "  ml-[38px]" : "ml-[0px]"
                  } text-[14px] mb-[31px] font-semibold`}
                >
                  Others
                </li>
              )}
              <li>
                <MenuItemCard
                  open={open}
                  to={"help-and-support"}
                  className={"flex items-center  mb-[33px] font-semibold group"}
                  itemLabel={"Help & Suppor"}
                  svg={HelpIcon}
                />
              </li>
              <li>
                <MenuItemCard
                  open={open}
                  // to={"/"}
                  className={"flex items-center  mb-[33px] font-semibold group"}
                  itemLabel={"Logout"}
                  svg={LogOutIcon}
                  
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* content of selected item of SideBar */}
      <div
        className={`${theme==="dark"?"bg-gray-700":"bg-pg-bg-color"} mt-[60px]`}
        
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
