import React, { useState } from 'react';

export default function SuggElem(props) {
const [show, setShow] = useState(false);

  return (
      <div className='suggestions-info' onClick={()=>{setShow(!show)}}>
        <p key={props.id}> {props.suggestion.fromWho} suggested {props.suggestion.name}</p>
{show? <div className='grid-button'>

<p>category: {props.suggestion.category}</p>
<p>{props.suggestion.description}</p>
<p>cost: {props.suggestion.cost}</p>
<p>time needed: {props.suggestion.timeNeeded}</p>
<img src={props.suggestion.photo} alt='photosugg'></img>
          <button  className='suggestions-button' onClick={()=>{props.saveSugg(props.id)}} >add to plan</button>
        </div>:<div> </div>}
        

      </div>
  )
}
