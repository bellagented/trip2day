import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Navbar.css";
import LogoutButton from "./Components/LogoutButton";


export default function Navbar(props) {
  const history = useHistory();
  if(history.location.pathname !== '/'){return(
    <div className='navbar'>
      {/* <div style={{display: "flex" }} className='navbar'>*/}
      <div className="logo-navbar">
        {/* <img className="logo-navbar" src={img}></img> */}
        <h1 className="logo-navbar">Trip2Day</h1>
      </div>
    
      <div className="grid-navlink">
        <Link className='navlink' to="/home">Home</Link>
        <Link className='navlink' to="/planner">Planners</Link>
        <Link className='navlink' to="/archive">Archives</Link>
        <LogoutButton/>
      </div>
    </div>)}
else{return <div/>}
}
