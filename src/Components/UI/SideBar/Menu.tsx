import { Link } from "react-router-dom";
import { messageService } from "../../../Service/messageService";

export default function Menu() {
  return (
    <div className="menu-bar">
      <Link
        to={"/"}
        onClick={() =>
          messageService.sendMessage({
            key: "to_home",
            status: true,
          })
        }
      >
        <i className="fa-solid fa-house"></i>
      </Link>
      <i className="fa-solid fa-user-plus"></i>
      <i className="fa-solid fa-ban"></i>
      <i className="fa-solid fa-user"></i>
    </div>
  );
}
