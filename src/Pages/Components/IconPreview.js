import React from "react";

export default function IconPreview(props) {
  return props.array.map((element) => {
    return (
      <div>
        {" "}
        <img style={{width: '150px',height:'150px',border:'2px solid black', borderRadius: '50%'}} src={element.img} alt="preview" />
        <h3>{element.name}</h3>
      </div>
    );
  });
}
