import { useParams } from "react-router-dom";
import "./Viewport.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

export default function ContactCard() {
  const contactData = useSelector((state: RootState) => state.contact.data);

  const { userId } = useParams<{ userId: string }>();
  const contact = userId
    ? contactData?.find((contact: any) => contact.id === parseInt(userId))
    : undefined;
  return (
    <div>
      {contact ? (
        <div className="custom-card">
          <div className="row">
            <div className="col">
              <img
                src={contact.avatar}
                alt={`avatar ${contact.first_name}`}
                width="250px"
                height="250px"
              />
            </div>
            <div className="col">
              <h1>{contact.first_name}</h1>
              <p>contact id: cnn/123/{contact.id}</p>
              <p>Email: {contact.email}</p>
              <div className="c-details-btn">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No matching contact found</p>
      )}
    </div>
  );
}
