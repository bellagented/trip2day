import React, { useState, useContext } from "react";
import { useHistory, Link, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import UserContext from "./Components/UserContext";

export default function PreviewFriendRequest(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const { isAuth, setIsAuth } = useContext(UserContext);
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
    if (res.data.username === username) {
      history.push("/home");
      console.log("WOW, AUTENTICATO");
      setIsAuth(true);
    }
    else {
      setData(res.data);
    }
  })
  .then(() => {
    console.log(isAuth);
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
          (data) ? (<h2>{data} non esiste, fatti n'account^^</h2>) : (null)
        }
      </section>
      </Router>
    </>
  );
}
