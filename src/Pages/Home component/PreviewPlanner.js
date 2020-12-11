import React from "react";
import IconPreviewPlanner from "../Components/IconPreviewPlanner";
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


//banner con preview del planner per la sezione home

export default function PreviewPlanner(props) {
  const { user } = useAuth0();
  const { name } = user;
  const history = useHistory();

 
  

  return (
    <section className="containerPreview-grid">
      <div className="sectiontitle">
        <Link to="/listPlanner/">
          <h2 className="title">Your plans</h2>
        </Link>
        {/* <div className="sectionsubtitle">
          <h3 className="subtitle" >Select a plan to open</h3>
        </div> */}
      </div>

      <div className="contaniterplans">

        <IconPreviewPlanner array={props.planners} path={"/planner/"} />

        <div
          className="preview"
          onClick={() => {
            history.push("newPlanner/");
          }}
        >

          <p className="add">+</p>

          <h3 className="sectionelementadd">Add planner</h3>

        </div>
      </div>
    </section>
  );
}
