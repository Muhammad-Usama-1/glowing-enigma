import React, { useState } from "react";
import "./Modal.css";
import { useStateValue } from "../StateProvider";

const Modal = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pkg, setPkg] = useState("");
  const [, dispatch] = useStateValue();
  const addToContact = () => {
    closeModal(false);
    console.log("Contact Added");
    const newData = {
      name: name,
      phone: phone,
      pkg: pkg,
    };

    dispatch({
      type: "ADD_CONTACT",
      payload: newData,
    });
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
          <h1>Add new contact in your contact Management system</h1>
        </div>
        <div className="body">
          <div className="input-box">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <label htmlFor="phonenumber">Phone Number : </label>
            <input
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
          <button onClick={addToContact}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
