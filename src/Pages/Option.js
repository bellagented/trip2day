import React, { useRef, useState } from "react";
import axios from "axios";


export default function UploadImage(props) {


  const [data, getFile] = useState({name: "", path: ""});
  const el = useRef();

  const handleChange = (e) => {
    if(e.target.name==='file'){const formData = new FormData();
      formData.append("file",  e.target.files[0]);
      axios.post("http://localhost:3001/upload", formData)
      .then(res => {
        console.log(res);
        props.setPhoto("http://localhost:3001" + res.data.path);
        getFile({
          name: res.data.name,
          path: "http://localhost:3001" + res.data.path
        })
      })
      .catch(err => console.log(err));}
  }

  

  return (
    <div>
      <div className="file-upload">
        <input type="file" ref={el} onChange={handleChange} name='file' />
        {/* <button onClick={uploadFile} className="upbutton">
          Upload
        </button> */}
            <hr />
        {/* displaying received image*/}
        {/* <div><textarea value={data.path} onChange={uploadFile} /></div> */}
        {data.path && <img src={data.path} alt={data.name} style={{width: 700}}/>}
        {console.log(data)}
      </div>
  </div>
  );
}