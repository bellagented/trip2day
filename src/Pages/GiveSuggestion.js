import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/GiveSuggestion.css";
import { useHistory } from "react-router-dom";
import LoadSuggestion from "./GiveSuggestion Components/LoadSuggestion";
import LoadPlace from "./GiveSuggestion Components/LoadPlace";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "./Option";
import Banner from '../styles/banner-home-2.jpg'
import Footer from './Footer'



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
      photoUrl: photo,
    }).then(() => history.push("/home"));
    e.preventDefault();
  };

  return (
    <>
    <div className='body'>
    <div className="banner-home">
    <img src={Banner} alt="logo" className='img-banner' />
  </div> 
      
      <div className="suggestioncontainer">
        <h2 className="suggestionHeader" >
          Give a suggestion to <span style={{ color: "#22222 " , fontWeight:'600'}}>{towho}</span>{" "}
          for <span style={{ color: "#22222 " , fontWeight:'600'}}>{forwhere}</span>
        </h2>
        <div className='sectionSelectBox'>
          <div className='col1'>
        <LoadPlace setEvent={setSuggestion} suggestion={myActivity}/>
        </div>
        <div className='col2'>
        <LoadSuggestion suggestion ={suggestion} id={id}/>
        </div>
        </div>
        <p>or</p>
        <section className='formDiv'>
          
          <form onSubmit={handleSubmit} className="formsuggestion">
            
            <select
              className="formelement1"
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
            
            
              
            <input
              className="formelement2"
              name="nameActivity"
              type="text"
              value={activity}
              onChange={handleChange}
              placeholder="Name Activity"
              required
            />

           

            <input
              className="formelement3"
              name="cost"
              type="text"
              value={cost}
              onChange={handleChange}
              placeholder="Cost per person"
              required
            />

          

            <input
              className="formelement4"
              name="time-needed"
              type="text"
              value={timeNeeded}
              onChange={handleChange}
              placeholder="Expected time"
              required
            />

            

            <textarea
              className="formelement5 descriptionsuggestion"
              name="description"
              type="text"
              value={description}
              onChange={handleChange}
              placeholder="Description"
              required
            />
            
            
            <UploadImage setPhoto={setPhoto}/>
            
            
            <input className="submitButton" type="submit" value="Submit" />
            
          </form>
          </section>
      </div>
      
      </div>
      <Footer/>
    </>
  );
}
