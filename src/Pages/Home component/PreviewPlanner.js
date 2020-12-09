import React from "react";
import IconPreview from "../Components/IconPreview";
import { Link } from "react-router-dom";
//banner con preview del planner per la sezione home

export default function PreviewPlanner(props) {
  return (
    <section className="containerPreview-grid">
      <div className="sectiontitle">
        <Link to="/planner ">
          <h2 className="title" >Your plans</h2>
        </Link>
        {/* <div className="sectionsubtitle">
          <h3 className="subtitle" >Select a plan to open</h3>
        </div> */}
      </div>
      

      <div className="contaniterplans">
        <IconPreview array={props.planners} path={'/planner/idplanner'}/>
        <IconPreview array={props.planners} path={'/planner/idplanner'}/>
        <IconPreview array={props.planners} path={'/planner/idplanner'}/>
  
        <div className="preview"> 
          <p className="add">+</p>
          <h3 className="sectionelementtitle">Add planner</h3>
        </div>

      </div>
    </section>
  );
}
