import React from "react";

export default function IconPreview(props) {
  return props.array.map((element) => {
    const style={backgroundImage: "url(" + element.img  + ")"}
    return (
      <div className='preview' style={style} >
        <h3 className="sectionelementtitle">{element.name}</h3>
      </div>
    );
  });
}
