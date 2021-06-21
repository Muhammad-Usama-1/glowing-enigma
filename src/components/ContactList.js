import React, { useState } from "react";
import "./ContactList.css";
import Contact from "./Contact.js";
import SearchIcon from "@material-ui/icons/Search";
import Modal from "./Modal";
import { useStateValue } from "../StateProvider";

const ContactList = () => {
  const [openModal, setOpenModal] = useState(false);

  const [data] = useStateValue();
  const { contacts } = data;

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <h1 className="title">Contact Management System</h1>
      {openModal && <Modal closeModal={setOpenModal} />}
      <div className="search-box">
        <SearchIcon className="search-icon" />
        <input
          placeholder="Search In Contacts"
          type="text"
          className="input-box"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="container">
        <div className="contact-card">
          <button className="add-contact" onClick={() => setOpenModal(true)}>
            Add New Contact
          </button>
          {contacts
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      </div>
    </>
  );
};

export default ContactList;
