import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "Okan",
      phoneNumber: "05551112233",
    },
    {
      fullName: "Ali",
      phoneNumber: "05541234455",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1 className="header-text">Contacts</h1>
      <List contactsList={contacts} />
      <Form addContact={setContacts} contactsForm={contacts} />
    </div>
  );
}

export default Contacts;
