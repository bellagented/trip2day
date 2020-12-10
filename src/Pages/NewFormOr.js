import React from "react";
import { useState } from "react";
import {  useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export default function ContactForm(props) {
  const [city, setCity] = useState('');
  const [title, setTitle] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const id = Math.random().toString(16).substr(8, 10);
  const history = useHistory();
  const { user } = useAuth0();
  const { name } = user;
  async function postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  

  const handleChange = (e) => {
    if (e.target.name === "city") {
      setCity(e.target.value);
    }
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "fromDate") {
      setFromDate(e.target.value);
    }
    if (e.target.name === "toDate") {
      setToDate(e.target.value);
    }
  };

  function newPlan() {
    const newPlan = {
      where: city,
      id: id,
      title:title,
      img: "",
      fromDate: fromDate,
      toDate: toDate,
      suggestion: [],
      myPlan: [],
    };
    postData("http://localhost:3001/" + name + "/planner/" + id, newPlan).then(()=>{history.push("/planner/"+id)});
  }

  const handleSubmit = (e) => {
   newPlan();
    e.preventDefault();
  };

  return (
    <section className="info-grid-box">
      <h2
        style={{
          marginLeft: 10,
        }}
      >
        Add info about your next trip
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "auto",
          width: "20%",
        }}
        className="form-box"
      >
        <input
          className="form-input-box"
          name="city"
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="City to visit"
          required
          style={{
            height: 15,
          }}
        />
        <br />

        <input
          className="form-input-box"
          name="title"
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Give a title to your adventure"
          required
        />
        <br />

        <input
          className="form-input-box"
          name="fromDate"
          type="date"
          value={fromDate}
          onChange={handleChange}
          required
        />
        <input
          className="form-input-box"
          name="toDate"
          type="date"
          value={toDate}
          onChange={handleChange}
          required
        />
        <label className="submit-button-box">
          Submit
          <input type="submit" value="Submit" className="submit-input" />
        </label>
      </form>
    </section>
  );
}

