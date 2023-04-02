import { useState, useEffect } from "react";

const initialFormValue = { fullName: "", phoneNumber: "" };

function Form({ addContact, contactsForm }) {
  const [form, setForm] = useState(initialFormValue);

  useEffect(() => {
    setForm(initialFormValue);
  }, [contactsForm]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contactsForm, form]);
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <div>
        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
