import React, { useState } from "react";
import "./Modal.css";
import Modal from "./Modal";
import { useStateValue } from "../StateProvider";
import AddIcon from "@material-ui/icons/Add";

const Detail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [{ contacts }] = useStateValue();

  return (
    <div className="header">
      {openModal && <Modal closeModal={setOpenModal} operation="Add new" />}
      <div>Total contacts : {contacts.length}</div>
      <div>
        <button className="add-btn" onClick={() => setOpenModal(true)}>
          <AddIcon />
          Add new Contacts
        </button>
      </div>
    </div>
  );
};

export default Detail;
