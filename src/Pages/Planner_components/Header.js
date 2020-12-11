import { colors } from "@material-ui/core";
import React from "react";
import "./planner.css";


export default function Header() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div
        className="containerHeaderImg"
        style={{
          width: 600,
          height: 320,
          margin: "0 auto",
          border: "1px dashed #a2a2a2",
          border: "solid blue",
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          alt="city"
          ref={uploadedImage}
          className="imageHeader"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <label className="custom-file-upload">
        Upload a photo
        <input
          className="buttonImg"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
        />
      </label>
      
    </div>
  );
}
