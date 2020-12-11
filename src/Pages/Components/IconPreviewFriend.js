import React from "react";
import { useHistory } from 'react-router-dom'




export default function IconPreview(props) {

  const history = useHistory();


  const GoTo = (path) => {
    history.push(path);
  };

  return props.array.map((element) => {
    const style={backgroundImage: "url(" + element.img  + ")"};
    const path = props.path + element.name;
    return (

      <section className="preview-grid">
        <div key={element.name} className='preview-friend-online' style={style} onClick={()=>GoTo(path)}>
        <h3 className="sectionelementtitle">{element.name}</h3>
        </div>
        
      </section>
    );
  });
}