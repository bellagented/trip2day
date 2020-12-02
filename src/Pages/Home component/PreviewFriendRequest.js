import React from "react";
import {useEffect,useState} from "react";
import IconPreviewRequest from "../Components/IconPreviewRequest";
import { Link } from "react-router-dom";
//banner con preview delle richieste degli amici per la sezione home

export default function PreviewFriendRequest(props) {
const [pendingQuestion, setPendingQuestion] = useState([]);
async function getData(url, setValue) {
  let request = await fetch(url);
  let response = await request.json();
  setValue(response);
  return response;
}
useEffect(() => {
  getData("http://localhost:3001/suggestion", setPendingQuestion)
  }
, []);
  return (
    <>
      <Link to="/ " className="sectiontitle">
        <h1>Help your friends</h1>
      </Link>
      <div >
        <IconPreviewRequest array={pendingQuestion} path={'/giveSuggestion'} />
      </div>
    </>
  );
}
