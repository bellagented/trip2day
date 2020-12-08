import React from "react";
import { useHistory, BrowserRouter as Router } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function PreviewFriendRequest(props) {
  const { loginWithRedirect } = useAuth0();
  const history = useHistory();


  return (
    <>
    <Router>
      <img src="" alt="logo" />
      <h1>PROGRAMMAAAAAA, SUGGERISCIIII, CONDIVIDIIIII</h1>
      <section>
        <form>
          <button onClick={() => loginWithRedirect().then(history.push("/home"))}>Log In</button>
        </form>
      </section>
      </Router>
    </>
  );
}
