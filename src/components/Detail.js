import React, { useState } from "react";
import "./Modal.css";
import Modal from "./Modal";
import { useStateValue } from "../StateProvider";

const Detail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [{ contacts }, dispatch] = useStateValue();

  return (
    <div className="header">
      {openModal && <Modal closeModal={setOpenModal} />}
      <div>Total contacts : {contacts.length}</div>
      <div>
        <button className="add-btn" onClick={() => setOpenModal(true)}>
          Add new Contacts
        </button>
      </div>
    </div>
  );
};

export default Detail;
