import React, {useState, useEffect} from "react";
import Header from "./Planner_components/Header";
import InfoTrip from "./Planner_components/infoTrip";
import BannerAskSuggestion from "./Planner_components/BannerAskSuggestion";
import './Planner_components/planner.css';
import SuggElem from "./Planner_components/SuggElem";
import Demo from "./Components/Schedule";


export default function Planner(){

  const [suggestions, setSugg] = useState([]);

  const userName='pippo';

  const getURL = 'http://localhost:3001/suggestion/'.concat(userName);
  
  // CHIAMATA GET
  const getSuggestions = async () => {
    const response = await fetch(getURL);
    const elems = await response.json();
    setSugg([...elems]);
  }
  
  useEffect(()=>{getSuggestions()},[]);

  // CHIAMATA PATCH
  const patchSuggestion = async (url, data) => {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json();
  }

  // CHIAMATA DELETE
  const deleteSuggestion = async (url, data) => {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json();
  }

  return (
  <div className="Planner">
      <Header/>
      <InfoTrip/>
      <BannerAskSuggestion/>
      <div className="container">
<h2 className='text-important-data'>Suggestions saved</h2>
  <div className="list">
      {suggestions.map(e=>{
        if(e.accepted === true)
          return <SuggElem key={e._id} u={getSuggestions} f={patchSuggestion} id={e._id} from={e.from} store={e.store} />;
      })}

  </div>
</div>

<div className="container">
 <h2 className='text-important-data'>Suggestions from friends</h2>
  <div className="list">
      {suggestions.map(e=>{
        if(e.accepted === false)
          return <SuggElem  key={e._id} u={getSuggestions} f={patchSuggestion} d={deleteSuggestion} 
          id={e._id} from={e.from} store={e.store} />;
      })}
  </div>
</div>
      <Demo date={"2020-12-25"}/>
      
      
      <div className="wrapper">



</div>

  </div>
  );
}


/*
InfoTrip: Il pulsante "submit" deve inviare i dati da qualche parte, creando un planner salvabile (tipo: nome del viaggio e luogo devono essere visibili, date vanno nell'agenda)
Demo: l'agenda deve adeguarsi al periodo scelto dall'utente
BannerAskSuggestion: Il submit deve creare una notifica nella home degli amici
Salva planner! fetch( post )
*/