import React from "react";
import IconPreviewPlanner from "../Components/IconPreviewPlanner";
import { Link ,useHistory} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
//banner con preview del planner per la sezione home

export default function PreviewPlanner(props) {
  const { user } = useAuth0();
  const { name } = user;
  const history= useHistory();

async function postData(url,data){ 
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
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
    postData("http://localhost:3001/" + name + "/planner/" + id,newPlan);
  }

  return (
    <>
      <Link className="sectiontitle" to="/planner ">
        <h1>Your plans</h1>
      </Link>
      <p className="sectionsubtitle">Select a plan to open</p>
      <div style={{ display: "flex" }}>
        <IconPreviewPlanner array={props.planners} path={"/planner/"} />

        <div
          className="preview"
          style={{
            backgroundImage:
              "url(https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Add-512.png)",
          }}
          onClick={()=>{newPlan();
          history.push('planner/' + id)}}
        >
          <h3 className="sectionelementtitle">Add planner</h3>
        </div>
      </div>
    </>
  );
}
