import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddEmpForm";
import EditEmpForm from "./forms/EditEmpForm";
import EmpTable from "./tables/EmpTable";

const App = () => {
  const EmpData = [
    {
      id: 1,
      firstName: "Tania",
      lastName: "floppydiskette",
      mobile: 9876544321,
      email: "abcd@abc.com",
      states: "maharashtra",
      city: "pune",
    },

    {
      id: 1,
      firstName: "raj",
      lastName: "maharaj",
      mobile: 9876678584,
      email: "abfd@abc.com",
      states: "maharashtra",
      city: "mumbai",
    },
  ];

  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(EmpData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      mobile: user.mobile,
      email: user.email,
      states: user.states,
      city: user.city,
    });
  };

  return (
    <div className="container">
      <h1>Employee Details</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit Employee</h2>
              <EditEmpForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <EmpTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
