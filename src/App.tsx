import { Link, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import { invoke } from '@tauri-apps/api'

export default function App() {
  const [contactData, setContactData] = useState<any>();

  invoke('greet', { name: 'World' })
  .then((response) => console.log(response))

  function UserDetails() {
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
                <img src={contact.avatar} alt="avatar" width="250px" />
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const data = await response.json();
      setContactData(data.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 side-bar">
            <div className="search">
              <div className="row">
                <div className="col-md-8">
                  <input className="form-control" placeholder="Search .." />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
            <hr />
            <div className="contacts">
              {contactData?.map((contact: any) => {
                return (
                  <div key={contact.id}>
                    <Link to={`users/${contact.id}`}>
                      {contact.first_name} {contact.last_name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-sm-9">
            <Routes>
              <Route path="users/:userId" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
