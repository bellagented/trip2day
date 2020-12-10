import React ,{useEffect, useState} from "react";
import "../styles/ListPlanner.css";
import Banner from '../styles/banner-planner-1.jpg'
import  { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

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
    getData("http://localhost:3001/"+name+"/").then((data) => {

      setAllplans(data.planner);
    });
  }, []);
  const Plannerlist = allplans.map((plan) => {
    return (
      <div className="plannerlistelement"
        key={plan.where}
        style={{ display: "flex" }}
        onClick={()=>{ history.push('/planner/'+plan.id)}}
      >
        <img src={plan.img} alt="travel"></img>
        <div>
          <h3>{plan.where}</h3>
          <p>
            {plan.fromDate} to {plan.toDate}
          </p>
        </div>
      </div>
    );
  });
  return (
    <section className="Listplanner-header-grid">
      <div className="banner-home">
        <img src={Banner} alt="logo" className='img-banner' />
      </div>

      <div className="container-listplanner">
        <h2 className="title-planner">Wewe, Lorem ipsum</h2>

        <div className="list-planner">
        <div>{Plannerlist}</div>
        </div>
      </div>


      
      <div className="plannerlistelement" style={{ display: "flex" }}>
        <img
          src="https://images.unsplash.com/photo-1468530986413-2c93495ed020?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
          alt="travel"
        ></img>
        <div onClick={() => {
    history.push('newPlanner');
  }}>
          <h3>Let's go to a new adventure!!</h3>
          <p>Click here to start organizing your next big adventure</p>
        </div>
      </div>
    </section>
  );
}


{/* <section className="containerPreview-friends">
      <div className="sectiontitle">
        <Link to="/ ">
          <h2 className="title">Help your friends</h2>
        </Link>
      </div>

      <div className="contaniterfriends">
        <IconPreviewRequest array={pendingQuestion} path={'/giveSuggestion'} />
      </div>
    </section> */}