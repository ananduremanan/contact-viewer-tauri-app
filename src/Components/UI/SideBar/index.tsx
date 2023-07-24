import SearchBar from "./SearchBar";
import Contacts from "./Contacts";
import Menu from "./Menu";
import "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div>
      <SearchBar />
      <hr />
      <Contacts />
    </div>
  );
}
