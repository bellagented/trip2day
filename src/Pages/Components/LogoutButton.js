import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button className="button-logout" onClick={() =>
        logout({returnTo: "http://localhost:3000", })
      } >Log Out
      {/* <p className="p-logout">Log Out</p> */}
    </button>
  );
};

export default LogoutButton;