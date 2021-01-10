import React, { useState } from "react";
const stateOptions = ["selct State", "Maharashtra", "Haryana", "Punjab", "Goa"];
const cityOptions = [
  "select city",
  "Pune",
  "Mumbai",
  "nashik",
  "Aurangabad",
  "Beed",
  "nagar",
];
const AddEmpForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>firstName</label>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleInputChange}
      />

      <label>lastName</label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
      />

      <label>mobile</label>
      <input
        type="number"
        name="mobile"
        value={user.mobile}
        onChange={handleInputChange}
      />

      <label>email</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />

      <label>states :</label>
      <select value={states} onChange={handleInputChange}>
        {stateOptions.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
      <select value={city} onChange={handleInputChange}>
        {cityOptions.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>

      <button>Add new Employee</button>
    </form>
  );
};

export default AddEmpForm;
