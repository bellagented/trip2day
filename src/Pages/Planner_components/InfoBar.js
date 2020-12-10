import React from "react";
import { useState } from "react";
import "./planner.css";

export default function InfoBar(props) {
  const { city, title, fromDate, toDate } = props.info;
  return (
    <section>
      <h1>{title}</h1>
      <h3>{city}</h3>

      <p>
        {fromDate} to {toDate}
      </p>
      <button onClick={()=>{props.switch(true);props.isSaved(false);}}>Edit</button>
    </section>
  );
}
