import React, { useState } from 'react';
import './planner.css';

export default function SuggElem(props) {
const [show, setShow] = useState(false);

  return (

    <div className='suggestions-list-element-box' onClick={()=>{setShow(!show)}}>
        <h3 className="suggestions-list-element" key={props.id}> {props.suggestion.fromWho} suggested {props.suggestion.name}</h3>
          {show? 
     
     <div className='grid-button'>
        <p>category: {props.suggestion.category}</p>
        <p>{props.suggestion.description}</p>
        <p>cost: {props.suggestion.cost}</p>
        <p>time needed: {props.suggestion.timeNeeded}</p>
 {props.suggestion.photoUrl? <img src={props.suggestion.photoUrl} alt='photosugg'></img>:<div> </div>}
        <button  className='suggestions-button' onClick={()=>{props.saveSugg(props.id)}} >add to plan</button>
        </div>:<div> 
      </div>}

        

      </div>
  )
}
