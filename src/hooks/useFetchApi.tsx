import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setContactData } from "../redux/contactSlice";

export const useFetchApi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const data = await response.json();
      dispatch(setContactData(data.data));
    };

    fetchData();

    const handleContextmenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
};
