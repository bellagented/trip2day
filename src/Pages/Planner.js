import React from "react";
import Header from "./Planner_components/Header";
import GivenSuggestions from "./Planner_components/givenSuggestionsComponent";
import InfoTrip from "./Planner_components/infoTrip";
import BannerAskSuggestion from "./Planner_components/BannerAskSuggestion";
import './Planner_components/planner.css';

export default function Planner() {
  return (
  <div className="Planner">
      <Header/>
      <InfoTrip />
      <BannerAskSuggestion/>
      <GivenSuggestions />
  </div>
  );
}
