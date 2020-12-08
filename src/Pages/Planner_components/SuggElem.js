import React from 'react';

export default function SuggElem(props) {

  const patchURL='http://localhost:3001/suggestion/change';
  const deleteURL= 'http://localhost:3001/suggestion/delete';

  const patchRequest  = async () => {
    props.f(patchURL, {id:props.id})
      .then(await props.u());
  }

  const deleteRequest  = async () => {
    props.d(deleteURL, {id:props.id})
      .then(await props.u());
  }

  return (
      <div className='suggestions-info'>
        <p key={props.id}> {props.from} {props.store}</p>

        <div className='grid-button'>
          <button  className='suggestions-button' onClick={patchRequest}>Accept</button>
          <button  className='suggestions-button' onClick={deleteRequest}>Delete</button>
        </div>

      </div>
  )
}
