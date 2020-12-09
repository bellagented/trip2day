import React from 'react';

export default function SuggElem(props) {


  return (
      <div className='suggestions-info'>
        <p key={props.id}> {props.fromWho} suggested {props.name}</p>

        <div className='grid-button'>
          <button  className='suggestions-button' onClick={()=>{props.saveSugg(props.id)}} >Accept</button>
        </div>

      </div>
  )
}
