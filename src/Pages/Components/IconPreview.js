import React from "react";

export default function IconPreview(props) {
  return props.array.map((element) => {
    return (
      <>
        {" "}
        <img src={element.img} alt="preview" />
        <h3>{element.name}</h3>
      </>
    );
  });
}
