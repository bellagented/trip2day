import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Navbar.css";
import LogoutButton from "./Components/LogoutButton";

export default function Navbar(props) {
  const history = useHistory();
  if(history.location.pathname !== '/'){return(
    <div style={{display: "flex" }} className='navbar'>
      <h2 className='appname'>Trip2Day</h2>
      <Link className='navlink' to="/home">Home</Link>
      <Link className='navlink' to="/planner">Planners</Link>
      <Link className='navlink' to="/archive">Archives</Link>
      <LogoutButton/>
    </div>)}
else{return <div/>}
}
