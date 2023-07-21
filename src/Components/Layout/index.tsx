import { useEffect, useState } from "react";
import Sidebar from "../UI/SideBar";
import ViewPort from "../UI/ViewPort";
import "../../App.css";
import axios from "axios";

export default function Layout() {
  const [contactData, setContactData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://reqres.in/api/users?page=2");
        setContactData(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // const handleContextmenu = (e: any) => {
    //   e.preventDefault();
    // };
    // document.addEventListener("contextmenu", handleContextmenu);
    // return function cleanup() {
    //   document.removeEventListener("contextmenu", handleContextmenu);
    // };
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 side-bar">
          <Sidebar contactData={contactData} />
        </div>
        <div className="col-sm-9">
          <ViewPort contactData={contactData} />
        </div>
      </div>
    </div>
  );
}
