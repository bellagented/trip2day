import React from "react";
import { useState } from "react";

import { withRouter } from "react-router-dom"; // <--- import `withRouter`. We will use this in the bottom of our file.
function ContactForm(props) {
  const [city, setCity] = useState(props.defaultValue.city);
  const [title, setTitle] = useState(props.defaultValue.title);
  const [fromDate, setFromDate] = useState(props.defaultValue.fromDate);
  const [toDate, setToDate] = useState(props.defaultValue.toDate);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/home");
    props.setData({
      city: city,
      title: title,
      fromDate: fromDate,
      toDate: toDate,
      creationMode: false,
    });
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

export default withRouter(ContactForm);
