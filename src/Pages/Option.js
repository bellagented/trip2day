import React, { useRef, useState } from "react";
import axios from "axios";


export default function UploadImage(props) {

  const [file, setFile] = useState("");
  const [data, getFile] = useState({name: "", path: ""});
  const el = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFile(file);
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
        <label className='labelBrowseFile'>
          Browse
        <input style={{display:'none'}} className='inputFile' type="file" ref={el} onChange={handleChange} />
        </label>
        <button  onClick={uploadFile} className="upbutton">
          Upload
        </button>
            
        {/* displaying received image*/}
        {/* <div><textarea value={data.path} onChange={uploadFile} /></div> */}
        {data.path && <img src={data.path} alt={data.name} style={{width: 700}}/>}
        {console.log(data)}
      </div>
  </div>
  );
}