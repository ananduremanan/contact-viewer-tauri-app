import { useState } from "react";
import { Link } from "react-router-dom";
import { messageService } from "../../../Service/messageService";

export default function Contacts(contactData: any) {
  const [selectedLink, setSelectedLink] = useState(null);

  messageService.getMessage().subscribe((message: any) => {
    if (message.status === true) {
      setSelectedLink(null);
    }
  });

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
              onClick={() => setSelectedLink(contact.id)}
            >
              {contact.first_name} {contact.last_name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}