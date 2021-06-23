import React, { useRef, useState } from "react";
import "./ContactList.css";
import Contact from "./Contact.js";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider";
import Detail from "./Detail";

const ContactList = () => {
  const [{ contacts }, dispatch] = useStateValue();
  const btn = useRef("");

  const [searchTerm, setSearchTerm] = useState("");
  const refreshContacts = () => {
    console.log("List will refresh");
    dispatch({
      type: "REFRESH",
    });
  };

  const deleteAllCOntacts = () => {
    console.log("Delete all contacts will be occur");
    dispatch({
      type: "DELETE_ALL",
    });
  };

  return (
    <>
      <h1 className="title">Contact Management System</h1>

      <div className="search-box">
        <SearchIcon className="search-icon" />
        <input
          placeholder="Search by name or Number"
          type="text"
          className="input-box"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <Detail />
      <div className="container">
        <div className="contact-card">
          {contacts
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.phone.includes(searchTerm)
              ) {
                return val;
              }
              return "";
            })

            .map((contact) => {
              return (
                <>
                  <div>
                    <Contact contact={contact} />
                  </div>
                </>
              );
            })}
        </div>
        <div className="CTA-btn-box">
          <button onClick={refreshContacts} className="refresh-btn">
            Refresh List
          </button>
          <button onClick={deleteAllCOntacts} ref={btn} className="dlt_all-btn">
            Delete All
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactList;
