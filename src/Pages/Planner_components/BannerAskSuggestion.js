import React from 'react';
import { useState } from 'react';
import './planner.css';

export default function BannerAskSuggestion(props) {
    const [request, setRequest] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "request") {
            setRequest(e.target.value);
        }
    };
    const handleSubmit = (e) => {
        props.sendrequest(request);
        e.preventDefault();
    }
    return (

    <section className='bannerSuggestion'>

      <form className="bannerSuggestion-grid-box" onSubmit={handleSubmit}>
        <div>
        <input className='input-request-box'
            name="request"
            type="textarea"
            value={request}
            onChange={handleChange}
            placeholder="Type here your request" className="input-request-text"
            required
          />
        </div>
        <div>
        <label className='submit-button-box'>Send
          <input type="submit" value="Submit" style={{ display: "none"}}/>
        </label>
        </div>
      </form>

    </section>
    )
}
