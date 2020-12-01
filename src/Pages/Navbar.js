import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const history = useHistory();
  return (
    <div style={{display: "flex" }} className='navbar'>
      <img />
      <h2 className='appname'>Trip2Day</h2>
      <Link className='navlink' to="/home">Home</Link>
      <Link className='navlink' to="/planner">Planners</Link>
      <Link className='navlink' to="/archive">Archives</Link>
    </div>
  );
}
