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
      {data.path && <img src={data.path} alt={data.name} style={{width: 200,margin:10,borderRadius:'6px'}}/>} <br/>
        <label className='labelBrowseFile'>
          Browse
        <input style={{display:'none'}} className='inputFile' type="file" ref={el} name='file' onChange={handleChange} />
        </label>
        {/* <button  onClick={uploadFile} className="upbutton">
          Upload
        </button> */}
            

       

        {/* displaying received image*/}
        {/* <div><textarea value={data.path} onChange={uploadFile} /></div> */}
        
      </div>
  </div>
  );
}