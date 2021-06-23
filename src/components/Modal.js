import React, { useState } from "react";
import "./Modal.css";
import { useStateValue } from "../StateProvider";

const Modal = ({ closeModal, operation, oldname, contact }) => {
  const [name, setName] = useState(contact ? contact.name : "");
  const [phone, setPhone] = useState(contact ? contact.phone : "");
  const [pkg, setPkg] = useState(contact ? contact.pkg : "");
  const [{ contacts }, dispatch] = useStateValue();
  const doOperation = () => {
    if (operation === "Add new") {
      if (!name || !phone || !pkg) {
        alert("Checked All feild correctly");
        return;
      }
      closeModal(false);
      console.log("Contact Added");
      const newData = {
        name: name,
        phone: phone,
        pkg: pkg,
        id: new Date().getTime(),
      };
      contacts.unshift(newData);

      dispatch({
        type: "ADD_CONTACT",
        payload: contacts,
      });
    }
    if (operation === "Update") {
      if (!name || !phone || !pkg) {
        alert("Checked All feild correctly");
        return;
      }
      const index = contacts.findIndex((c) => c.name === oldname);
      contacts.splice(index, 1);
      const newData = {
        name: name ? name : contact.name,
        phone: phone ? phone : contact.phone,
        pkg: pkg ? pkg : contact.pkg,
        id: contact.id,
      };
      contacts.unshift(newData);
      closeModal(false);
      dispatch({
        type: "ADD_CONTACT",
        payload: contacts,
      });
    }
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{operation} contact in your contact Management system</h1>
        </div>
        <div className="body">
          <div className="input-box">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder={oldname}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <label htmlFor="phonenumber">Phone Number : </label>
            <input
              value={phone}
              type="text"
              id="phonenumber"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <label htmlFor="pkg">PKG : </label>
            <input
              type="text"
              id="pkg"
              value={pkg}
              onChange={(e) => {
                setPkg(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => doOperation()}>
            {operation ? operation : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
