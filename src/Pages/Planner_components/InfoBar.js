import React from "react";
import { useState } from "react";
import "./planner.css";

export default function InfoBar(props) {
  const { city, title, fromDate, toDate } = props.info;
  return (
    <section>
      
        <h2 className="title-travel">{title}</h2>

      <div className="info-travel">
        <h3 className="city-travel">{city}</h3>
         <p className="date-city">{fromDate} to {toDate}</p>
      </div>

      <button className="button-city" onClick={()=>{props.switch(true);props.isSaved(false);}}>Edit</button>
    </section>
  );
}
