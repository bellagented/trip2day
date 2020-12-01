import React from "react";
import { useHistory } from 'react-router-dom'




export default function IconPreview(props) {

  const history = useHistory();

  const GoTo = (path) => {
    history.push(path);
  };

  return props.array.map((element) => {
    const style={backgroundImage: "url(" + element.img  + ")"}
    return (
      <div key={element.name} className='preview' style={style} onClick={()=>GoTo(props.path+'/'+element.id+'/'+element.name+'/'+element.where)}>
        <h3 className="sectionelementtitle">{element.name} is asking help for {element.where}</h3>
      </div>
    );
  });
}
