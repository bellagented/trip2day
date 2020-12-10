import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/GiveSuggestion.css";
import { useHistory } from "react-router-dom";
import LoadSuggestion from "./GiveSuggestion Components/LoadSuggestion";
import LoadPlace from "./GiveSuggestion Components/LoadPlace";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "./Option";



export default function GiveSuggestion(props) {
  let { id, towho, forwhere } = useParams();
  const [category, setCategory] = useState("");
  const [activity, setName] = useState("");
  const [cost, setCost] = useState("");
  const [timeNeeded, setTimeNeeded] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [myActivity, setMyActivity] = useState([]);
  const [suggestion, setSuggestion] = useState({activity:[{activity:'select a place'}]});
  const history = useHistory();
  const { user } = useAuth0();
  const { name } = user;

  async function getData(url, setValue) {
    let request = await fetch(url);
    let response = await request.json();
    setValue(response);
    return response;
  }
  useEffect(() => {
    getData("http://localhost:3001/mysuggestion/" +name, setMyActivity);
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "category") {
      setCategory(e.target.value);
    }
    if (e.target.name === "nameActivity") {
      setName(e.target.value);
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

  async function sendData(url, obj) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const a = await response.json();
    return a;
  }

  const handleSubmit = (e) => {
    sendData(" http://localhost:3001/ReqSuggestion/"+name, {
      id: id,
      fromWho: name,
      category: category,
      name: activity,
      cost: cost,
      timeNeeded: timeNeeded,
      description: description,
      photo: photo,
    }).then(() => history.push("/home"));
    e.preventDefault();
  };

  return (
    <>
 
      <div className="suggestioncontainer">
        <h2 className="suggestionHeader" >
          Give a suggestion to <span style={{ color: "#22222 " , fontWeight:'600'}}>{towho}</span>{" "}
          for <span style={{ color: "#22222 " , fontWeight:'600'}}>{forwhere}</span>
        </h2>
        <div className='sectionSelectBox'>
        <LoadPlace setEvent={setSuggestion} suggestion={myActivity}/>
        <LoadSuggestion suggestion ={suggestion} id={id}/>
        </div>
        <p>or</p>
        <section className='formDiv'>
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
              <option value="Instagram Spot">Activity/Tour</option>
            </select>

            <br />

            <input
              className="formelement"
              name="nameActivity"
              type="text"
              value={activity}
              onChange={handleChange}
              placeholder="Name Activity"
              required
            />

            <br />

            <input
              className="formelement"
              name="cost"
              type="text"
              value={cost}
              onChange={handleChange}
              placeholder="Cost per person"
              required
            />

            <br />

            <input
              className="formelement"
              name="time-needed"
              type="text"
              value={timeNeeded}
              onChange={handleChange}
              placeholder="Expected time"
              required
            />

            <br />

            <textarea
              className="formelement descriptionsuggestion"
              name="description"
              type="text"
              value={description}
              onChange={handleChange}
              placeholder="Description"
              required
            />
            <br />
            <label className='labelAddPhoto'>
              Add a photo:

              {/* <input
                className="formelement"

              <input
                className='addAPhoto'

                type="file"
                name="photo"
                onChange={handleChange}
              /> */}

            </label>
            <UploadImage setPhoto={setPhoto}/>
            <br />

            <input className="submitButton" type="submit" value="Submit" />
          </form>
        </section>
      </div>
    </>
  );
}
