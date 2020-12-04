import React, { useState } from "react";


export default function LoadPlace(props) {
  

  
  const handleChange = (e) => {
    props.setEvent(
      props.suggestion.find((suggestion) => {
        return suggestion.where === e.target.value;
      })
    );
  };


  return (
    <>
      <form className="formsuggestion">
        <label>Select from your archive:</label>
        <select
          className="formelement"
          onChange={handleChange}
          name="activity"
          required
        >
          <option>-select a plan</option>
          {props.suggestion.map((mysuggestion) => {
            return (
              <option key={mysuggestion.where}>
                {mysuggestion.where}
              </option>
            );
          })}
        </select>
      </form>
    </>
  );
}
