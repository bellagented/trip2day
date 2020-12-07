import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function LoadSuggestion(props) {
  const [selectedEvent, setSelectedEvent] = useState({});
  const history = useHistory();

  async function sendData(url, obj) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const a = await response.json();
    console.log(a);
    return a;
  }

  const handleChange = (e) => {
    setSelectedEvent(
      props.suggestion.activity.find((suggestion) => {
        return suggestion.activity === e.target.value;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     sendData(" http://localhost:3001/ReqSuggestion", {
      id: props.id,
      from: "mario",
      category: selectedEvent.category,
      activity: selectedEvent.activity,
      cost: selectedEvent.cost,
      timeNeeded: selectedEvent.timeNeeded,
      description: selectedEvent.description,
      photo: selectedEvent.photo,
    }).then(() => history.push("/home"));;
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="formsuggestion">
        <select
          className="formelement"
          onChange={handleChange}
          name="activity"
          required
        >
          <option>-select activity</option>
          {props.suggestion.activity.map((mysuggestion) => {
            return (
              <option key={mysuggestion.activity}>
                {mysuggestion.activity}
              </option>
            );
          })}
        </select>
        <input className="formelement" type="submit" value="Submit" />
      </form>
    </>
  );
}
