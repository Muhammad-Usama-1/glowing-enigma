import React, { useRef } from "react";
import "./ContactList.css";
import { useStateValue } from "../StateProvider";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import PersonIcon from "@material-ui/icons/Person";
import DeleteIcon from "@material-ui/icons/Delete";
const Contact = ({ contact }) => {
  const { phone, pkg } = contact;
  const [{ contacts }, dispatch] = useStateValue();
  const el = useRef("");
  const changeClass = () => {
    console.log(el.current);
    el.current.classList.toggle("hidden");
  };
  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    console.log(newContacts);
    console.log("Contact deleted");
    dispatch({
      type: "DELETE_CONTACT",
      payload: newContacts,
    });
  };

  return (
    <>
      <div className="btn-box">
        <PersonIcon />
        <button className="contact-info" onClick={changeClass}>
          {contact.name}
        </button>
        <PermPhoneMsgIcon />
        <DeleteIcon
          className="dlt-icon"
          onClick={() => deleteContact(contact.id)}
        />
      </div>

      <div ref={el} className="hidden contact-detail">
        <p>{phone}</p>
        <p>{pkg}</p>
      </div>
    </>
  );
};

export default Contact;
