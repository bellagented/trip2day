import React from "react";
import IconPreview from "../Components/IconPreview";
import { Link } from "react-router-dom";
//banner con preview del planner per la sezione home


export default function PreviewPlanner(props) {
  return (
    <>
      <Link to="/planner ">YOUR PLANNER</Link>
      <div style={{display:'flex'}}>
      <IconPreview array={props.planners} />
      <div>
      <h1>+</h1>
        <h3>create new</h3>
      </div>
      </div>
    </>
  );
}
