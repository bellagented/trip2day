import React,{useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from '../Option';
export default function EditPlannedSugg (props){
    const [category, setCategory] = useState("");
    const [cost, setCost] = useState("");
    const [timeNeeded, setTimeNeeded] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const[saved, setSaved] = useState(false);
    const { user } = useAuth0();
  const { name } = user;
    const position = props.planned.findIndex((e) => {
        return e.id === props.id;
      });
      const defaultValue=props.planned[position];
const savealert=()=>{setSaved(true);
setTimeout(() => {
    setSaved(false)
}, 2000);};

    const handleChange = (e) => {
        if (e.target.name === "category") {
          setCategory(e.target.value);
        }
        if (e.target.name === "cost") {
          setCost(e.target.value);
        }
        if (e.target.name === "time-needed") {
          setTimeNeeded(e.target.value);
        }
        if (e.target.name === "description") {
          setDescription(e.target.value);
        }
        if (e.target.name === "photo") {
          setPhoto(e.target.value);
        }
      };
const savechange=(obj)=>{
    const position = props.planned.findIndex((e) => {
        return e.id === props.id;
      });
      let copyarray = props.planned.slice();
      copyarray[position]=obj;
      props.edit(copyarray); 
};
      const handleSubmit = (e) => {
        savechange({
          id: props.id,
          fromWho: name,
          category: category===''? defaultValue.category:category,
          name:  props.planned[position].name,
          cost: cost===''? defaultValue.cost:cost,
          timeNeeded: timeNeeded===''? defaultValue.timeNeeded:timeNeeded,
          description: description===''? defaultValue.description:description,
          photo: photo,
        });
       
        props.save();
       
       savealert();
        e.preventDefault();
      };


return(

    <div className="form-suggestions-saved">
         <form onSubmit={handleSubmit} className="formsuggestion">
            <select
              className="formelement"
              value={category}
              onChange={handleChange}
              name="category"
              required
            >
              <option value="Select a Category">Select a Category</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Art/Museum">Art/Museum</option>
              <option value="Beach/Mountain/Nature">
                Beach/Mountain/Nature
              </option>
              <option value="Activity/Tour">Activity/Tour</option>
              <option value="Instagram Spot">Instagram Spot</option>
            </select>

            
            <br />
<label>cost:</label>
            <input
              className="formelement"
              name="cost"
              type="text"
              value={cost}
              onChange={handleChange}
              placeholder={defaultValue.cost}
              
            />

            <br />
            <label>time needed:</label>
            <input
              className="formelement"
              name="time-needed"
              type="text"
              value={timeNeeded}
              onChange={handleChange}
              placeholder={defaultValue.timeNeeded}
            
            />

            <br />
            <label>description:</label>
            <textarea
              className="formelement descriptionsuggestion"
              name="description"
              type="text"
              value={description}
              onChange={handleChange}
              placeholder={defaultValue.description}
             
            />
            <br />
            <label>
              Add a photo:
              {/* <input
                className="formelement"
                type="file"
                name="photo"
                onChange={handleChange}
              /> */}

            </label>
            <UploadImage setPhoto={setPhoto}/>
            <br />

            <input className="formelement" type="submit" value="Set change" />
            {saved? <p>Saved!</p>:<div></div>}
          </form>
    </div>
)
}


