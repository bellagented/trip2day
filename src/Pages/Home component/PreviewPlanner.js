import React from "react";
import IconPreview from "../Components/IconPreview";
import { Link } from "react-router-dom";
//banner con preview del planner per la sezione home

export default function PreviewPlanner(props) {
  return (
    <>
      <Link className="sectiontitle" to="/planner ">
        <h1 >Your plans</h1>
      </Link>
      <p className="sectionsubtitle">Select a plan to open</p>
      <div style={{ display: "flex" }}>
        <IconPreview array={props.planners} />
     
      <div
        className="preview"
        style={{
          backgroundImage:
            "url(https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Add-512.png)",
        }}
      >
        <h3 className="sectionelementtitle">Add planner</h3>
      </div>
      </div>
    </>
  );
}
