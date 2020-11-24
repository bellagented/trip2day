import React from "react";
import IconPreview from "../Components/IconPreview";
import { Link } from "react-router-dom";
//banner con preview del planner per la sezione home

let plannerarray = [
    {
      img:
        "https://images.unsplash.com/photo-1565698764182-4d51cd861d1e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "postobellissimo",
    },
    {
      img:
        "https://images.unsplash.com/photo-1565698764182-4d51cd861d1e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "lostessoposto",
    },
  ];
export default function PreviewPlanner(props) {
  return (
    <>
      <Link to="/planner ">YOUR PLANNER</Link>
      <IconPreview array={plannerarray} />
      <div>
      <img src='' alt="plus" />
        <h3>create new</h3>
      </div>
    </>
  );
}
