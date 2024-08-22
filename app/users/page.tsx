import React from "react";

// define the shape of User objects
interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // fetch users from the API
  const res = fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // disable caching
  });
  // wait for the response and parse the JSON
  const users: User[] = await (await res).json();

  return (
    <>
      <h1>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className="table table-bordered">
        {" "}
        {/* add the table class */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* iterate over the users array and display them in a table */}
          {users.map((user) => (
            <tr key={user.id}>
              {" "}
              {/* add the key attribute dynamically*/}
              <td>{user.name}</td> {/* display the user's name dynamically*/}
              <td>{user.email}</td> {/* display the user's email dynamically*/}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
