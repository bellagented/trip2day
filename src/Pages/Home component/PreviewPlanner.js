import React from "react";
import IconPreviewPlanner from "../Components/IconPreviewPlanner";
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


//banner con preview del planner per la sezione home

export default function PreviewPlanner(props) {
  const { user } = useAuth0();
  const { name } = user;
  const history = useHistory();

  async function postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  const id = Math.random().toString(16).substr(8, 10);
  function newPlan() {
    const newPlan = {
      where: "",
      id: id,
      title: "Click edit to start create your new journey",
      img: "",
      fromDate: "",
      toDate: "",
      textRequest: "",
      response: [],
      savedResponse: [],
      myPlan: [],
    };
    postData("http://localhost:3001/" + name + "/planner/" + id, newPlan);
  }

  return (
    <section className="containerPreview-grid">
      <div className="sectiontitle">
        <Link to="/planner ">
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
            newPlan();
            history.push("newPlanner/" + id);
          }}
        >

          <p className="add">+</p>

          <h3 className="sectionelementadd">Add planner</h3>

        </div>
      </div>
    </section>
  );
}
