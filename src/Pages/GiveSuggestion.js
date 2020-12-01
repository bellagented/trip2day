import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/GiveSuggestion.css";
import { useHistory } from "react-router-dom";

export default function GiveSuggestion(props) {
  let { id, towho, forwhere } = useParams();
  const [category, setCategory] = useState("");
  const [activity, setName] = useState("");
  const [cost, setCost] = useState("");
  const [timeNeeded, setTimeNeeded] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const history = useHistory();

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
    sendData(" http://localhost:3001/suggestion", {
      to: id,
      from: "mario",
      category: category,
      activity: activity,
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
        <h2 className="suggestionHeader">
          Give a suggestion to <span style={{ color: "#2F7055" }}>{towho}</span> for <span style={{ color: "#2F7055" }}>{forwhere}</span>
        </h2>
        <section>
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
            <label>
              Add a photo:
              <input
                className="formelement"
                type="file"
                name="photo"
                onChange={handleChange}
              />
            </label>
            <br />

            <input className="formelement" type="submit" value="Submit" />
          </form>
        </section>
      </div>
    </>
  );
}
