import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/actions/authActions";

const MenuItemCard = (props) => {
  const dispatch = useDispatch();
  const lng = useSelector((state) => state.languages.language);
  const navigate = useNavigate();

  return (
    <>
      {props.itemLabel === "Logout" ? (
        <div
          className={`${props.className}  ${
            props.open ? " cursor-pointer  ml-[42.75px]" : "ml-[20px]"
          } focus:text-yellow`}
          onClick={() => {
            dispatch(logoutUser({ username: "" }));
            window.localStorage.removeItem('isAuthenticated');
            // navigate((lng===`in` ? "in/" : "/"))
            window.location.reload();
          }}
        >
          <props.svg />

          <span
            className={`${!props.open && "hidden"} ${
              props.open ? "ease-in duration-400 ml-[16px]" : "ml-[1px]"
            } text-tcolor text-[14px] group-hover:text-yellow`}
          >
            {props.itemLabel}
          </span>
        </div>
      ) : (
        <Link
          to={props.to}
          className={`${props.className}  ${
            props.open ? "  ml-[42.75px]" : "ml-[20px]"
          } focus:text-yellow`}
        >
          <props.svg />
          <span
            className={`${!props.open && "hidden"} ${
              props.open ? "ease-in duration-400 ml-[16px]" : "ml-[1px]"
            } text-tcolor text-[14px] group-hover:text-yellow`}
          >
            {props.itemLabel}
          </span>
        </Link>
      )}
    </>
  );
};

export default MenuItemCard;
