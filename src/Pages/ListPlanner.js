import React, { useEffect, useState } from "react";
import "../styles/ListPlanner.css";
import Banner from "../styles/banner-planner-1.jpg";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./Footer";

export default function ListPlanner() {
  const history = useHistory();
  const [allplans, setAllplans] = useState([]);
  const { user } = useAuth0();
  const { name } = user;

  async function getData(url) {
    let request = await fetch(url);
    let response = await request.json();
    return response;
  }
  useEffect(() => {
    getData("http://localhost:3001/" + name + "/").then((data) => {
      setAllplans(data.planner);
    });
  }, []);
  const Plannerlist = allplans.map((plan) => {
    return (
      <div
        className="plannerlistelement"
        key={plan.where}
        style={{ display: "flex" }}
        onClick={() => {
          history.push("/planner/" + plan.id);
        }}
      >
        <img className="lethPhoto" src={plan.img} alt="travel"></img>
        <div>
          <h3 className="leth3">{plan.where}</h3>
          <p className="lethp">
            {plan.fromDate} to {plan.toDate}
          </p>
        </div>
      </div>
    );
  });
  return (
    <section className="Listplanner-header-grid">
      <div className="banner-home">
        <img src={Banner} alt="logo" className="img-banner" />
      </div>

      <section className="container-listplanner">
        <div className="listplanner-grid">
          <h2 className="title-planner">Your planners</h2>
        </div>
        <div className="planner-travel-grid">
          <div className="planner-travel">{Plannerlist}</div>
          <div className="planner-travel">
            <div className="plannerlistelement" style={{ display: "flex" }}>
              <img
                className="lethPhoto"
                src="https://images.unsplash.com/photo-1468530986413-2c93495ed020?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
                alt="travel"
              ></img>
              <div
                onClick={() => {
                  history.push("newPlanner");
                }}
              >
                <h3 className="leth3">Let's go to a new adventure!!</h3>
                <p className="lethp">
                  Click here to start organizing your next big adventure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

{
  /* <section key={element.name} className="previewrequest-grid">
        <div  className='previewrequest' style={{display:'flex'}} 
          onClick={()=>GoTo(props.path+'/'+element.id+'/'+element.name+'/'+element.where)}>
        
          
          <div style={style}  className='imgrequestpreview'/>
            <div className="sectionelementtitlerequest-grid">
              <h3 className="sectionelementtitlerequest">
                • {element.name} is asking help for { element.where}.
              </h3>
              <p className="info-request">
                {element.text}
              </p>
            </div>

        </div>
</section> */
}
