import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedLink } from "../../../redux/contactSlice";
import type { RootState } from "../../../redux/store";
import './Sidebar.module.css'

export default function Contacts() {
  const contactData = useSelector((state: RootState) => state.contact.data);
  const selectedLink = useSelector(
    (state: RootState) => state.contact.selectedLink
  );
  const dispatch = useDispatch();

  return (
    <div className="contacts">
      {contactData?.map((contact: any) => {
        return (
          <div key={contact.id}>
            <Link
              to={`users/${contact.id}`}
              className={`link-class ${
                selectedLink === contact.id ? "active-link" : ""
              }`}
              onClick={() => dispatch(setSelectedLink(contact.id))}
            >
              {contact.first_name} {contact.last_name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
