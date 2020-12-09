import React, { useState, useEffect } from "react";
import Header from "./Planner_components/Header";
import InfoTrip from "./Planner_components/infoTrip";
import InfoBar from "./Planner_components/InfoBar";
import BannerAskSuggestion from "./Planner_components/BannerAskSuggestion";
import "./Planner_components/planner.css";
import SuggElem from "./Planner_components/SuggElem";
import Demo from "./Components/Schedule";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const selectedplan = {
  city: "",
  title: "",
  fromDate: "",
  toDate: "",
  img:"",
  creationMode: true,
  isSaved:true,
};
export default function Planner() {
  const [selectedPlan, setSelectedPlan] = useState(selectedplan);

  const { user } = useAuth0();
  const { name } = user;
  let { idplanner } = useParams();
const url="http://localhost:3001/" + name + "/planner/" + idplanner;
  async function getData(url) {
    let request = await fetch(url);
    let response = await request.json();

    return response;
  }
  useEffect(() => {
    getData(url).then((data) => {
      setSelectedPlan({
        city: data.where,
        title: data.title,
        fromDate: data.fromDate,
        toDate: data.toDate,
        img:data.img,
        creationMode: false,
        isSaved:true,
      });
    });
  }, []);

  const [suggestions, setSugg] = useState([]);
  
  //per passare all'edit dei dati
  const setCreationMode = () => {
    setSelectedPlan({
      city: selectedPlan.city,
      title: selectedPlan.title,
      fromDate: selectedPlan.fromDate,
      toDate: selectedPlan.toDate,
      creationMode: true,
      isSaved:false,
    });
  };

  //per salvare i dati
  const patchPlan = async (url, data) => {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    };
  const userName = "pippo";

  const getURL = "http://localhost:3001/suggestion/".concat(userName);

  // CHIAMATA GET
  const getSuggestions = async () => {
    const response = await fetch(getURL);
    const elems = await response.json();
    setSugg([...elems]);
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  // CHIAMATA PATCH
  const patchSuggestion = async (url, data) => {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  // CHIAMATA DELETE
  const deleteSuggestion = async (url, data) => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  return (
    <div className="Planner">
     
      {selectedPlan.creationMode ? (<div>
        <Header />
        <InfoTrip setData={setSelectedPlan} defaultValue={selectedPlan} />
        </div>
      ) : (
        <div>
        <img src={selectedPlan.img} alt='cityimg'/>
        <InfoBar info={selectedPlan} switch={setCreationMode} />
        </div>
      )}
      <BannerAskSuggestion />
      {selectedPlan.isSaved ? "All changes are saved": <button onClick={()=>{setSelectedPlan({
        city: selectedPlan.city,
        title: selectedPlan.title,
        fromDate: selectedPlan.fromDate,
        toDate: selectedPlan.toDate,
        img:selectedPlan.img,
        creationMode: false,
        isSaved:true,
      }); patchPlan(url, selectedPlan);}}>Save plan!</button>}


      
      <div className="container">
        <h2 className="text-important-data">Suggestions saved</h2>
        <div className="list">
          {suggestions.map((e) => {
            if (e.accepted === true)
              return (
                <SuggElem
                  key={e._id}
                  u={getSuggestions}
                  f={patchSuggestion}
                  id={e._id}
                  from={e.from}
                  store={e.store}
                />
              );
          })}
        </div>
      </div>

      <div className="container">
        <h2 className="text-important-data">Suggestions from friends</h2>
        <div className="list">
          {suggestions.map((e) => {
            if (e.accepted === false)
              return (
                <SuggElem
                  key={e._id}
                  u={getSuggestions}
                  f={patchSuggestion}
                  d={deleteSuggestion}
                  id={e._id}
                  from={e.from}
                  store={e.store}
                />
              );
          })}
        </div>
      </div>
      <Demo date={"2020-12-25"}/>

      <div className="wrapper"></div>
    </div>
  );
}

/*
InfoTrip: Il pulsante "submit" deve inviare i dati da qualche parte, creando un planner salvabile (tipo: nome del viaggio e luogo devono essere visibili, date vanno nell'agenda)
Demo: l'agenda deve adeguarsi al periodo scelto dall'utente
BannerAskSuggestion: Il submit deve creare una notifica nella home degli amici
Salva planner! fetch( post )
*/
