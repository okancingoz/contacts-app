import { useState } from "react";

function List({ contactsList }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contactsList.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const showPhoneNumber = (e) => {
    contactsList.forEach((contact) => {
      if (contact.phoneNumber === e.currentTarget.id) {
        e.currentTarget.innerText = `${contact.fullName} (${contact.phoneNumber})`;
      }
    });
  };

  const hidePhoneNumber = (e) => {
    contactsList.forEach((contact) => {
      if (contact.phoneNumber === e.currentTarget.id) {
        e.currentTarget.innerText = `${contact.fullName}`;
      }
    });
  };

  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => {
          return (
            <li
              key={i}
              id={contact.phoneNumber}
              onMouseEnter={showPhoneNumber}
              onMouseLeave={hidePhoneNumber}
            >
              {contact.fullName}
            </li>
          );
        })}
      </ul>
      <p className="totalContacts">Total contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
