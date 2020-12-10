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
      <div>
        <div key={element.id} className='preview-city' style={style} 
          onClick={()=>GoTo(props.path+element.id)}>
        </div>
        <div> 
           <h3 className="sectionelementcity">{element.name}</h3>
        </div>
      </div>
    );
  });
}
