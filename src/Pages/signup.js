import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Signup() {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(signupUsername + ", " + signupPassword);
    e.preventDefault();
  };

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setSignupUsername(e.target.value);
    }
    if (e.target.name === "password") {
      setSignupPassword(e.target.value);
    }
  };

  const register = () => {
    fetch("http://localhost:3001/register", {
      method: "POST",
      withCredentials: true,
      body: {
        username: signupUsername,
        password: signupPassword
      }
    }).then(console.log("New User added!"));
  }

  return (
    <div>
      <h1>Register your free account!</h1>
    <section>
        <form onSubmit={handleSubmit}>
          <label>
            username
            <input
              name="username"
              type="text"
              value={signupUsername}
              onChange={handleChange}
            />
          </label>

          <label>
            password
            <input
              name="password"
              type="password"
              value={signupPassword}
              onChange={handleChange}
            />
          </label>
          <button onClick={register}>Register!</button>
        </form>
      </section>
    </div>
  );
};
