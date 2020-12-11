import React, { useState, useEffect } from "react";
import Header from "./Planner_components/Header";
import InfoTrip from "./Planner_components/infoTrip";
import InfoBar from "./Planner_components/InfoBar";
import BannerAskSuggestion from "./Planner_components/BannerAskSuggestion";
import "./Planner_components/planner.css";
import SuggElem from "./Planner_components/SuggElem";
import SuggElemSaved from "./Planner_components/SuggElemSaved";
import Demo from "./Components/Schedule";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from './Footer'
import Banner from '../styles/banner-planner-2.jpg'


const selectedplan = {
  city: "",
  title: "",
  fromDate: "",
  toDate: "",
  img: "",
};
export default function Planner() {
  const [selectedPlan, setSelectedPlan] = useState(selectedplan);
  const [startingDate, setStartingDate] = useState("2020-01-01");
  const [isLoaded, setIsLoaded] = useState(false);
  const [plannedAppointments, setPlannedAppointments] = useState([]);
  const { user } = useAuth0();
  const { name } = user;
  let { idplanner } = useParams();
  const [suggestions, setSugg] = useState([]);
  const [isSaved, setIsSaved] = useState(true);
  const [creationMode, setCreationMode] = useState(false);
  const [obj,setObj]=useState({});

  const url = "http://localhost:3001/" + name + "/planner/" + idplanner;

  async function getData(url) {
    let request = await fetch(url);
    let response = await request.json();

    return response;
  }
  useEffect(() => {
    getData(url)
      .then((data) => {
        setSelectedPlan({
          city: data.where,
          title: data.title,
          fromDate: data.fromDate,
          toDate: data.toDate,
          img: data.img,
        });
        setStartingDate(data.fromDate);
        setPlannedAppointments(data.myPlan);
        setSugg(data.suggestion);
        return data;
      })
      .then((data) => {
        setIsLoaded(true);
      });
  }, []);


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

  //salvare nel proprio piano
  const savesuggestion = function (id) {
    const position = suggestions.findIndex((e) => {
      return e.id === id;
    });
    let copySugg = suggestions.slice();
    let savedElement = copySugg[position];
    let copyarray = plannedAppointments.slice();
    savedElement={
      category: "",
    cost: "",
    description: "",
    fromWho: name,
    id: Math.random().toString(16).substr(8, 10),
    name: savedElement.name,
    photo: "",
    timeNeeded: "",};
    copyarray.push(savedElement);
    setIsSaved(false);
    setPlannedAppointments(copyarray);
  };

  //rimuovere dal piano
  const refusesuggestion = function (id) {
    const position = plannedAppointments.findIndex((e) => {
      return e.id === id;
    });
    let copyarray = plannedAppointments.slice();
    copyarray.splice(position, 1);
    setIsSaved(false);
    setPlannedAppointments(copyarray);
  };

  //mandare richiesta sugg
  async function postReq(url, obj) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const a = await response.json();
    return a;
  }

useEffect(() => {
  saveAll();
  
}, [selectedPlan,plannedAppointments,suggestions]);

  const sendrequest = (text) => {
    const request = {
      img: selectedPlan.img,
      name: name,
      where: selectedPlan.city,
      id: idplanner,
      text:text,
    };
    postReq(" http://localhost:3001/AskSuggestion", request);
  };
const saveAll=()=>{
  // setIsSaved(true);

  patchPlan(url,{selectedPlan:selectedPlan,
    plan: plannedAppointments, suggestion:suggestions});
};
  return (
    
    // SECTION CON IMMAGINE CITTA' + INFO VIAGGI
    <div className="planner">
      <div className="banner-home">
        <img src={Banner} alt="logo" className='img-banner' />
        </div>

     {isLoaded ? ( <section>
      {creationMode ? (

        
        <div >
          <Header defaultimg={selectedPlan.img}/>
          <InfoTrip setData={setSelectedPlan} defaultValue={selectedPlan} setCreationMode={setCreationMode} save={saveAll} />

        </div>

      ) : (


        <div className="planner-travel-grid">
          <div className="travel-img">
            <img src={selectedPlan.img} alt="cityimg" />
          </div>
          <div className="travel-info">
            <InfoBar info={selectedPlan} switch={setCreationMode} isSaved={setIsSaved}/>
          </div>

        </div>
      )}

      {/* TYPE HERE YOUR REQUEST */}

      <BannerAskSuggestion sendrequest={sendrequest} />

      {/* blocco bottone salvataggio */}
      {/* suggestions saved */}

      <section className="suggestions-grid">
        
        <div className="container">
          <h2 className="suggestions-title">Suggestions saved</h2>
            <div className="suggestions-list"> {plannedAppointments.map((e) => {
              return (
                <SuggElemSaved
                 key={e.id}
                id={e.id}
                event={e}
                refuseSugg={refusesuggestion}
                edit={setPlannedAppointments}
                planned={plannedAppointments}
                save={saveAll}
                />
                );
              })}
            </div>
        </div>
     
        {/* suggestions from friends */}

        <div className="container">
            <h2 className="suggestions-title">Suggestions from friends</h2>
              <div className="suggestions-list">{suggestions.map((e) => {
                return (
                  <SuggElem
                  key={e.id}
                  id={e.id}
                  suggestion={e}
                  saveSugg={savesuggestion}
                  />
                );
              })}
            </div>
          </div>

        </section>

          <Demo date={startingDate} appointments={plannedAppointments} />
        </section>
      ) : (
        <div></div>
      )}

      <div className="wrapper"></div>
      <Footer/>
    </div>
  );
}

/*
InfoTrip: Il pulsante "submit" deve inviare i dati da qualche parte, creando un planner salvabile (tipo: nome del viaggio e luogo devono essere visibili, date vanno nell'agenda)
Demo: l'agenda deve adeguarsi al periodo scelto dall'utente
BannerAskSuggestion: Il submit deve creare una notifica nella home degli amici
Salva planner! fetch( post )
*/
