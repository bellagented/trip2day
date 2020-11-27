import React from "react";
import IconPreview from "../Components/IconPreview";
import { Link } from "react-router-dom";
//banner con preview dell'archivio
let plannerarray = [
  {
    img:
      "https://images.unsplash.com/photo-1565447162108-5a44f22d5364?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fG1hZHJpZHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "11/12/2007 - Madrid with Bae",
  },
  {
    img:
      "https://images.unsplash.com/photo-1581287210430-af250fda237d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnJ1dGFsaXNtfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
    name: "07/05/2018 - Cinisello Balsamo CoastToCoast",
  },
];

export default function ArchivePreview(props) {
  return (
    <>
      <Link to="/ " className="sectiontitle">
        <h1>Your Stories</h1>
      </Link>
      <div style={{ display: "flex" }}>
        <IconPreview array={plannerarray} path={'/archive/idarchive'}/>
      </div>
    </>
  );
}