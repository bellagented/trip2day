import React from "react";
import { useState } from "react";

export default function GiveSuggestion(props) {
 
  const [category, setCategory] = useState("");
  const [activity, setName] = useState("");
  const [cost, setCost] = useState("");
  const [timeNeeded, setTimeNeeded] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

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

  const handleSubmit = (e) => {
    console.log(
      category + "," + activity + "," + cost + "," + timeNeeded + "," + description + "," + photo
    );
    e.preventDefault();
  };

  return (
    <>
      <img src="" alt="logo" />
  <h2>Give a suggestion for {}</h2>
      <section>
        <form onSubmit={handleSubmit}>
          <select
            value={category}
            onChange={handleChange}
            name="category"
            required
          >
            <option value="Select a Category">Select a Category</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Art/Museum">Art/Museum</option>
            <option value="Beach/Mountain/Nature">Beach/Mountain/Nature</option>
            <option value="Activity/Tour">Activity/Tour</option>
            <option value="Instagram Spot">Activity/Tour</option>
          </select>

          <br />

          <input
            name="nameActivity"
            type="text"
            value={activity}
            onChange={handleChange}
            placeholder="Name Activity"
            required
          />

          <br />

          <input
            name="cost"
            type="text"
            value={cost}
            onChange={handleChange}
            placeholder="Cost per person"
            required
          />

          <br />

          <input
            name="time-needed"
            type="text"
            value={timeNeeded}
            onChange={handleChange}
            placeholder="Expected time"
            required
          />

          <br />

          <input
            name="description"
            type="text"
            value={description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <br/>
          <label>
              Add a photo
              <br/>
          <input type="file"  name="photo"  onChange={handleChange} />
          </label>
          <br/>

          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
}
