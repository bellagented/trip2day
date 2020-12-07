import React from "react";
import { useHistory } from "react-router-dom";

const archive = [
  {
    name: "Rome by night",
    img:
      "https://images.unsplash.com/photo-1605003890266-b47f911eb8ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=741&q=80",
  },
  {
    name: "Paris baguette escargot",
    img:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "London calling",
    img:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80",
  },
];

export default function RequestBanner(props) {
  const history = useHistory();

  const GoTo = (path) => {
    history.push(path);
  };

  return (
    <div>
      <h2 className="friendarchivetitle">My travels</h2>
      <div className="friendarchivecontainer">
        {" "}
        {archive.map((element) => {
          const style = { backgroundImage: "url(" + element.img + ")" };
          return (
            <div
            key={element.name}
              className="previewarchive"
              style={style}
              onClick={() => GoTo("/archive/idarchive")}
            >
              <h3 className="archivetitle">{element.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
