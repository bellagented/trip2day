import React from "react";
import { useHistory } from "react-router-dom";

const request = [{ to: "Rome", id: "AfthSRTUiuh" }, { to: "Barcelona", id: "mhJYgJKUhkuG" }];

export default function RequestBanner(props) {
  const history = useHistory();

  const GoTo = (path) => {
    history.push(path);
  };

  return (
    <div className="requestbanner">
      {request.map((destination) => {
        return (
          <div key={destination.id}>
            <p>
              {props.nickname} is looking for suggestions for a new trip to{" "}
              {destination.to}
              <button onClick={() => GoTo("/giveSuggestion/"+destination.id)}>
                Give suggestion{" "}
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}
