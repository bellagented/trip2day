import React,{useState} from 'react';
import EditPlannedSugg from './EditPlannedSugg';
import './planner.css';

export default function SuggElemSaved(props) {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    
    <div className='suggestions-list-element-box-saved' >
        <h3 className="suggestions-list-element-saved" key={props.id} onClick={()=>{setShow(!show)}}>{props.event.name}</h3>
    
        {show?   <div className='grid-button-saved'>
          <button  className='suggestions-button-saved' onClick={()=>{setEdit(!edit); setShow(!show)}} >Add description and photo'</button>
          <button  className='suggestions-button-saved' onClick={()=>{props.refuseSugg(props.id)}} >Remove from plan</button>

      {props.event.category? <p>category: {props.event.category}</p>:<div> </div>}
      {props.event.description? <p>{props.event.description}</p>:<div> </div>}
      {props.event.cost? <p>cost: {props.event.cost}</p>:<div> </div>}
      {props.event.timeNeeded? <p>time needed: {props.event.timeNeeded}</p>:<div> </div>}
      {/* {true ? <img  className="img-suggestions-saved" src="https://media.internazionale.it/images/2020/11/25/158978-sd.jpg" alt='photosugg'></img>:<div> </div>} */}
      {props.event.photo? <img src={props.event.photo} alt='photosugg'></img>:<div> </div>}
          
        </div>: <></>}
        {edit? <div>
        <button className="button-close-suggestions" onClick={()=>{setEdit(!edit); setShow(!show)}}>close</button>
            <EditPlannedSugg edit={props.edit} planned={props.planned} id={props.id} save={props.save}/>
          </div> :<div></div>}
      
    </div>
  )
}