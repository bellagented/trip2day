import React from "react";
import IconPreview from "../Components/IconPreview";
import { Link } from "react-router-dom";
//banner con preview delle richieste degli amici per la sezione home
let plannerarray = [
  {
    img:
      "https://images.unsplash.com/photo-1606276969080-bf446209054a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60 ",
    name: "Gianni is asking help for Rome",
  },
  {
    img:
      "https://images.unsplash.com/photo-1582828102977-7210c1096e9e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
    name: "Mary is asking help for Madrid",
  },
];

export default function PreviewFriendRequest(props) {
  return (
    <>
      <Link to="/ " className="sectiontitle">
        <h1>HELP MEEEEE!</h1>
      </Link>
      <div style={{ display: "flex" }}>
        <IconPreview array={plannerarray} />
      </div>
    </>
  );
}
