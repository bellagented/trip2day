import React, { useRef, useState } from "react";
import axios from "axios";


export default function UploadImage(props) {

  const [file, setFile] = useState("");
  const [data, getFile] = useState({name: "", path: ""});
  const el = useRef();

  const handleChange = (e) => {
    if(e.target.name === "photo") {
      const file = e.target.files[0];
      console.log(file);
      setFile(file);
    }
  }

  const uploadFile = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios.post("http://localhost:3001/upload", formData)
    .then(res => {
      console.log(res);
      getFile({
        name: res.data.name,
        path: "http://localhost:3001" + res.data.path
      })
    }).then(() => {props.setPhoto(data.path)})
    .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="file-upload">
        <input type="file" ref={el} onChange={handleChange} name="photo" />
        <button onClick={uploadFile} className="upbutton">
          Upload
        </button>
            <hr />
        {/* displaying received image*/}
        {/* <div><textarea value={data.path} onChange={uploadFile} /></div> */}
        {data.path && <img src={data.path} alt={data.name} style={{width: 300}}/>}
        {console.log(data)}
      </div>
  </div>
  );
}