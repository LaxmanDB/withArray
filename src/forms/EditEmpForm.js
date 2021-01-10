import React, { useState, useEffect } from "react";
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

const EditEmpForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
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

      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditEmpForm;
