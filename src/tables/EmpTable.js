import React from "react";

const EmpTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>first name</th>
        <th>last name</th>
        <th>mobile</th>
        <th>email</th>
        <th>state</th>
        <th>city</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstname}</td>
            <td>{user.lastName}</td>
            <td>{user.mobile}</td>
            <td>{user.email}</td>
            <td>{user.states}</td>
            <td>{user.city}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default EmpTable;
