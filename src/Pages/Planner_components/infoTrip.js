import React from "react";
import { useState } from "react";
import "./planner.css";
import UploadImage from "../Option";

export default function InfoTrip(props) {
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");
  const [fromDate, setFromDate] = useState(props.defaultValue.fromDate);
  const [toDate, setToDate] = useState(props.defaultValue.toDate);
  const [img, setImg] = useState("");

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

  const setAndDo = function (callback) {
    props.setData({
      city: city === "" ? props.defaultValue.city : city,
      title: title === "" ? props.defaultValue.title : title,
      fromDate: fromDate,
      toDate: toDate,
      img: img === "" ? props.defaultValue.img : img,
    });
props.setData((state)=>{props.save();return state;})
    return callback(false);
  };
 
  const handleSubmit = (e) => {
    setAndDo(props.setCreationMode);
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
        <label>Add a photo:</label>
        <UploadImage setPhoto={setImg} />
        <input
          className="form-input-box"
          name="city"
          type="text"
          value={city}
          onChange={handleChange}
          placeholder={props.defaultValue.city}
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
          placeholder={props.defaultValue.title}
        />
        <br />

        <input
          className="form-input-box"
          name="fromDate"
          type="date"
          value={fromDate}
          onChange={handleChange}
        />
        <input
          className="form-input-box"
          name="toDate"
          type="date"
          value={toDate}
          onChange={handleChange}
        />
        <label className="submit-button-box">
          Submit
          <input type="submit" value="Submit" className="submit-input" />
        </label>
      </form>
    </section>
  );
}
