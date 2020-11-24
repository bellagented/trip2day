import React from "react";
import { useState } from "react";

export default function PreviewFriendRequest(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    console.log(username + "," + password);
    e.preventDefault();
  };

  return (
    <>
      <img src="" alt="logo" />
      <h1>PROGRAMMAAAAAA, SUGGERISCIIII, CONDIVIDIIIII</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <label>
            username
            <input
              name="username"
              type="text"
              value={username}
              onChange={handleChange}
            />
          </label>

          <label>
            password
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
}
