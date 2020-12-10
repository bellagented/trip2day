import React,{useState} from 'react';
import EditPlannedSugg from './EditPlannedSugg';
export default function SuggElemSaved(props) {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
      <div className='suggestions-info' >
        <p key={props.id} onClick={()=>{setShow(!show)}}>{props.event.name}</p>

        {show?   <div className='grid-button'>
          <button  className='suggestions-button' onClick={()=>{setEdit(!edit)}} >{edit? 'close':' Add description and photo'}</button>
          <button  className='suggestions-button' onClick={()=>{props.refuseSugg(props.id)}} >Remove from plan</button>
          {edit? <div>
            <EditPlannedSugg edit={props.edit} planned={props.planned} id={props.id} save={props.save}/>
          </div> :<div></div>}
        </div>: <></>}

      </div>
  )
}