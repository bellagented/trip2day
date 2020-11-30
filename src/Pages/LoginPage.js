import React from "react";
import { useState } from "react";
import { useHistory, Link, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

export default function PreviewFriendRequest(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const history = useHistory();

  // const handleChange = (e) => {
  //   if (e.target.name === "username") {
  //     setUsername(e.target.value);
  //   }
  //   if (e.target.name === "password") {
  //     setPassword(e.target.value);
  //   }
  // };

  const handleSubmit = (e) => {
    console.log(username + ", " + password);
    e.preventDefault();
  };

  const login = () => {
    // fetch("http://localhost:3001/auth", {
    //   method: "POST",
    //   withCredentials: true,
    //   body: {
    //     username: username,
    //     password: password
    //   }
    // }).then((res) => {console.log(res);
    // /*history.push("/home");*/});
    axios({
    method: "POST",
    
    data: {
      username: username,
      password: password
    },
    withCredentials: true,
    url: "http://localhost:3001/auth",
  }).then((res) => {
    console.log(res);
    if (res.data === "Successfully Authenticated") {
      /*history.push("/home");*/
    };
    if (res.data === "No User Exists") {
      console.log(res.config.data + " doesn't appear to exist");
      setData(res.data);
    }
  });
  }

  return (
    <>
    <Router>
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
              onChange={e => setUsername(e.target.value)}
            />
          </label>

          <label>
            password
            <input
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <button onClick={login}>Log In</button>
        </form>
        <Link to="/signup">Register your free account!</Link>
        {
          (data === "No User Exists") ? (<h2>fatti n'account^^</h2>) : (null)
        }
      </section>
      </Router>
    </>
  );
}
