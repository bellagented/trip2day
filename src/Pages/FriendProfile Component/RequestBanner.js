import React from "react";
import { useHistory } from 'react-router-dom'

const request = ["Rome", "Barcellona"];

export default function RequestBanner(props) {
    const history = useHistory();

  const GoTo = (path) => {
    history.push(path);
  };

  return(<div className='requestbanner'>{request.map((destination) => {
    return (
      <div >
        <p>
          {props.nickname} is looking for suggestions for a new trip to{" "}
          {destination}
          <button onClick={()=> GoTo('/giveSuggestion')}>Give suggestion </button>
        </p>
      </div>
    )
  })}</div> );
}
