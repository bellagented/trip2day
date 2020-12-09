import React,{useState} from 'react';

export default function SuggElemSaved(props) {
  const [show, setShow] = useState(false);

  return (
      <div className='suggestions-info' onClick={()=>{setShow(!show)}}>
        <p key={props.id}>{props.event.name}</p>

        {show?   <div className='grid-button'>
          <button  className='suggestions-button' >add description and photo</button>
          <button  className='suggestions-button' onClick={()=>{props.refuseSugg(props.id)}} >Remove from plan</button>
        </div>: <></>}

      </div>
  )
}