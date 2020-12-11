import React from "react";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "./Option";
import axios from "axios";

export default function ContactForm(props) {
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [img, setImg] = useState("");
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

  //8888888888888888888888888888888888888888888888888888

 
  const [data, getFile] = useState({ name: "", path: "" });
  const el = useRef();

  //88888888888888888888888888888888888888888888888888888
  const handleChange = (e) => {
    if (e.target.name === "file") {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      axios
        .post("http://localhost:3001/upload", formData)
        .then((res) => {
          setImg("http://localhost:3001" + res.data.path);
          getFile({
            name: res.data.name,
            path: "http://localhost:3001" + res.data.path,
          });
        })
        .catch((err) => console.log(err));
    }
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
      title: title,
      img: img,
      fromDate: fromDate,
      toDate: toDate,
      suggestion: [],
      myPlan: [],
    };
    postData("http://localhost:3001/" + name + "/planner/" + id, newPlan).then(
      () => {
        history.push("/planner/" + id);
      }
    );
  }

  const formSubmit = (e) => {
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
        onSubmit={formSubmit}
        style={{
          margin: "auto",
          width: "20%",
        }}
        className="form-box"
      >
        <div className="file-upload">
          <input type="file" ref={el} onChange={handleChange} name="file" />
          {/* <button onClick={uploadFile} className="upbutton">
          Upload
        </button> */}
          <hr />
          {/* displaying received image*/}
          {/* <div><textarea value={data.path} onChange={uploadFile} /></div> */}
          {data.path && (
            <img src={data.path} alt={data.name} style={{ width: 700 }} />
          )}
        </div>
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
