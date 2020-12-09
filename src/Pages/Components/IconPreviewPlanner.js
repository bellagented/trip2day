import React from "react";
import { useHistory } from 'react-router-dom';




export default function IconPreview(props) {

  const history = useHistory();

  const GoTo = (path) => {
    history.push(path);
  };

  return props.array.map((element) => {
    const style={backgroundImage: "url(" + element.img  + ")"}
    return (

      <div key={element.id} className='preview' style={style} onClick={()=>GoTo(props.path+element.id)}>
        <h3 className="sectionelementtitle">{element.name}</h3>

      </div>
    );
  });
}
