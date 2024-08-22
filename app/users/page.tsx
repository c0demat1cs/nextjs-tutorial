import React from "react";

// define the shape of User objects
interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await (await res).json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
