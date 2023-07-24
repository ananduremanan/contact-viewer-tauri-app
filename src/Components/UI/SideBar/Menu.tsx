import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedLink } from "../../../redux/contactSlice";
import "./Sidebar.module.css";

export default function Menu() {
  const dispatch = useDispatch();

  return (
    <div className="menu-bar">
      <Link to={"/"} onClick={() => dispatch(setSelectedLink(null))}>
        <i className="fa-solid fa-house"></i>
      </Link>
      <i className="fa-solid fa-user-plus"></i>
      <i className="fa-solid fa-ban"></i>
      <i className="fa-solid fa-user"></i>
    </div>
  );
}
