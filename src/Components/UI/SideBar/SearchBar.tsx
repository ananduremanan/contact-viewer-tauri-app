import React from "react";
import "./Sidebar.module.css"

export default function SearchBar() {
  return (
    <div>
      <div className="search">
        <input className="form-control" placeholder="Search .." />
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
}
