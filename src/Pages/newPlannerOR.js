import React, { useState, useEffect } from "react";
//import Upload from "./Components/uploadButton.js";
import ContactForm from "./Planner_components/NewFormOr";
import Header from "./Planner_components/Header";
import InfoBar from "./Planner_components/InfoBar";
import BannerAskSuggestion from "./Planner_components/BannerAskSuggestion";
import "./Planner_components/planner.css";
import SuggElem from "./Planner_components/SuggElem";
import SuggElemSaved from "./Planner_components/SuggElemSaved";
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
export default function NewPlanner() {
  const [selectedPlan, setSelectedPlan] = useState(selectedplan);
  const [startingDate, setStartingDate] = useState("2020-01-01");
  const [isLoaded, setIsLoaded] = useState(false);
  const [plannedAppointments, setPlannedAppointments] = useState([]);
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

  //salvare nel proprio piano
  const savesuggestion = function (id) {
    const position = suggestions.findIndex((e) => {
      return e.id === id;
    });
    let copySugg = suggestions.slice();
    let savedElement = copySugg[position];
    let copyarray = plannedAppointments.slice();
    copyarray.push(savedElement);
    setPlannedAppointments(copyarray);
  };

  //rimuovre dal piano
  const refusesuggestion = function (id) {
    const position = plannedAppointments.findIndex((e) => {
      return e.id === id;
    });
    let copyarray = plannedAppointments.slice();
    copyarray.splice(position, 1);

    setPlannedAppointments(copyarray);
  };

  return (
    <div className="Planner">
      {selectedPlan.creationMode ? (
        <div>
          <ContactForm setData={setSelectedPlan} defaultValue={selectedPlan} />
        </div>
      ) : (
        <div>
          <img src={selectedPlan.img} alt="cityimg" />
          <InfoBar info={selectedPlan} switch={setCreationMode} />
        </div>
      )}
      {selectedPlan.isSaved ? (
        ""
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
    </div>
  );
}
