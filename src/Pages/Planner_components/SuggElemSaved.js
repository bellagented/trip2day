import React from 'react';

export default function SuggElemSaved(props) {


  return (
      <div className='suggestions-info'>
        <p key={props.id}> {props.fromWho} suggested {props.name}</p>

        <div className='grid-button'>
          <button  className='suggestions-button' >Add to plan</button>
          <button  className='suggestions-button' onClick={()=>{props.refuseSugg(props.id)}} >Refuse</button>
        </div>

      </div>
  )
}