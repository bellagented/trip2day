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

const selectedplan = {
  city: "",
  title: "",
  fromDate: "",
  toDate: "",
  img: "",
  creationMode: true,
  isSaved: true,
};
export default function Planner() {
  const [selectedPlan, setSelectedPlan] = useState(selectedplan);
  const [startingDate, setStartingDate] = useState("2020-01-01");
  const [isLoaded, setIsLoaded] = useState(false);
  const [plannedAppointments, setPlannedAppointments] = useState([
    {
      title: "London Eye",
      startDate: new Date(2021, 7, 26, 9, 30),
      endDate: new Date(2021, 7, 26, 11, 30),
    },
  ]);
  const { user } = useAuth0();
  const { name } = user;
  let { idplanner } = useParams();
  const [suggestions, setSugg] = useState([]);

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
          creationMode: false,
          isSaved: true,
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

  //per passare all'edit dei dati
  const setCreationMode = () => {
    setSelectedPlan({
      city: selectedPlan.city,
      title: selectedPlan.title,
      fromDate: selectedPlan.fromDate,
      toDate: selectedPlan.toDate,
      creationMode: true,
      isSaved: false,
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

  //salvare suggerimenti
  const savesuggestion = function (id) {
    const position = suggestions.findIndex((e) => {
      return e.id === id;
    });
    let copyarray = suggestions.slice();
    let copyelement = copyarray[position];
    copyelement.accepted = true;
    copyarray[position] = copyelement;
    setSugg(copyarray);
  };

  //rifiutare suggerimenti
  const refusesuggestion = function (id) {
    const position = suggestions.findIndex((e) => {
      return e.id === id;
    });
    let copyarray = suggestions.slice();
    let copyelement = copyarray[position];
    copyelement.accepted = false;
    copyarray[position] = copyelement;
    setSugg(copyarray);
  };

  return (
    <div className="Planner">
      {selectedPlan.creationMode ? (
        <div>
          <Header />
          <InfoTrip setData={setSelectedPlan} defaultValue={selectedPlan} />
        </div>
      ) : (
        <div>
          <img src={selectedPlan.img} alt="cityimg" />
          <InfoBar info={selectedPlan} switch={setCreationMode} />
        </div>
      )}
      <BannerAskSuggestion />
      {selectedPlan.isSaved ? (
        "All changes are saved"
      ) : (
        <button
          onClick={() => {
            setSelectedPlan({
              city: selectedPlan.city,
              title: selectedPlan.title,
              fromDate: selectedPlan.fromDate,
              toDate: selectedPlan.toDate,
              img: selectedPlan.img,
              creationMode: false,
              isSaved: true,
            });
            patchPlan(url, selectedPlan);
          }}
        >
          Save plan!
        </button>
      )}

      <div className="container">
        <h2 className="text-important-data">Suggestions saved</h2>
        <div className="list">
          {suggestions.map((e) => {
            if (e.accepted === true)
              return (
                <SuggElemSaved
                  key={e.id}
                  id={e.id}
                  fromWho={e.fromWho}
                  name={e.name}
                  refuseSugg={refusesuggestion}
                />
              );
          })}
        </div>
      </div>

      {isLoaded ? (
        <section>
          <div className="container">
            <h2 className="text-important-data">Suggestions from friends</h2>
            <div className="list">
              {suggestions.map((e) => {
                if (e.accepted === false)
                  return (
                    <SuggElem
                      key={e.id}
                      id={e.id}
                      fromWho={e.fromWho}
                      name={e.name}
                      saveSugg={savesuggestion}
                    />
                  );
              })}
            </div>
          </div>

          <Demo date={startingDate} appointments={plannedAppointments} />
        </section>
      ) : (
        <div></div>
      )}

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
