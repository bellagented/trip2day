import React from "react";
import {useState } from "react";
import { useHistory } from "react-router-dom";


export default function RequestBanner(props) {
  const history = useHistory();

  const GoTo = (path) => {
    history.push(path);
  };

  return (
    <div className="requestbanner">
    <p>{props.request.length===0? 'no trips planned':''}</p>
      {props.request.map((destination) => {
        return (
          
          <div key={destination.id}>
         
            <p>
              I'm looking for suggestions for a new trip to{" "}
              {destination.where}
              <button onClick={() => GoTo("/giveSuggestion/"+destination.id+'/'+props.name+'/'+destination.where)}>
                Give suggestion{" "}
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}
