import React, { Fragment } from "react";

// -----------------------------
// Exercise 3: Display a user list with props and Fragment
// -----------------------------

// UserList receives an array of users as a prop
function UserList({ users }) {
  return (
    // Fragment instead of an outer wrapper div
    <>
      {users.map((user) => (
        // Fragment instead of a div for each item (needs a key since we're in a map)
        <Fragment key={user.id}>
          <p>
            <strong>{user.name}</strong> — Age {user.age} — {user.city}
          </p>
          <hr style={{ border: "none", borderTop: "1px solid #eee" }} />
        </Fragment>
      ))}
    </>
  );
}

function App() {
  const users = [
    { id: 1, name: "Alex Morgan", age: 28, city: "Tehran" },
    { id: 2, name: "Sara Ahmadi", age: 24, city: "Isfahan" },
    { id: 3, name: "Michael Karimi", age: 31, city: "Shiraz" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", padding: "24px" }}>
      <h1>Exercise 3 — User List with Fragment</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
