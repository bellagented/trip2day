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
      <section key={element.name} className="previewrequest-grid">
        <div  className='previewrequest' style={{display:'flex'}} 
          onClick={()=>GoTo(props.path+'/'+element.id+'/'+element.name+'/'+element.where)}>
        
          
          <div style={style}  className='imgrequestpreview'/>
            <div className="sectionelementtitlerequest-grid">
              <h3 className="sectionelementtitlerequest">
                • {element.name} is asking help for { element.where}.
              </h3>
              <p className="info-request">
                {element.text}
              </p>
            </div>

        </div>
      </section>
     
    );
  });
}
