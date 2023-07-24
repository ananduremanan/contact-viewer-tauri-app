import Sidebar from "../UI/SideBar";
import ViewPort from "../UI/ViewPort";
import "../../App.css";
import { useFetchApi } from "../../hooks/useFetchApi";
import Menu from "../UI/SideBar/Menu";
import Contacts from "../UI/SideBar/Contacts";

export default function Layout() {
  useFetchApi();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 side-bar">
          <Sidebar />
          <Menu />
        </div>
        <div className="col-sm-9">
          <ViewPort />
        </div>
      </div>
    </div>
  );
}
