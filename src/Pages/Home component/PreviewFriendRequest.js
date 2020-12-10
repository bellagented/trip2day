import React from "react";
import {useEffect,useState} from "react";
import IconPreviewRequest from "../Components/IconPreviewRequest";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
//banner con preview delle richieste degli amici per la sezione home

export default function PreviewFriendRequest(props) {
const [pendingQuestion, setPendingQuestion] = useState([]);
const { user } = useAuth0();
  const { name } = user;

async function getData(url, setValue) {
  let request = await fetch(url);
  let response = await request.json();
  setValue(response);
  return response;
}
useEffect(() => {
  getData("http://localhost:3001/ReqSuggestion/"+name, setPendingQuestion)
  }
, []);
  return (
    <section className="containerPreview-friends">
      <div className="sectiontitle">
        <Link to="/ ">
          <h2 className="title">Help your friends</h2>
        </Link>
      </div>

      <div className="contaniterfriends">
        <IconPreviewRequest array={pendingQuestion} path={'/giveSuggestion'} />
      </div>
    </section>
  );
}

