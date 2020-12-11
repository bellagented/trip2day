import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



export default function LoadSuggestion(props) {
  const [selectedEvent, setSelectedEvent] = useState({});
  const history = useHistory();
  const { user } = useAuth0();
  const { name } = user;

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
      fromWho: name,
      category: selectedEvent.category,
      activity: selectedEvent.name,
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
              <option key={mysuggestion.name}>
                {mysuggestion.name}
              </option>
            );
          })}
        </select>
      
        <input className="submitButton1" type="submit" value="Submit" />
        
      </form>
    </>
  );
}
