import React from "react";
import { connect } from "react-redux";
import { setUploadFile } from "../redux/uploadFile/uploadFile.actions";
import UploadProgress from "./UploadProgress/UploadProgresss";
import "./uploadButton.css";

function Upload(props) {
  const handleAttachFile = (e) => {
    //validation for attached file here
    console.log("files upload", e.target.files);
    props.setUploadFile(e.target.files);
    e.target.value = ""; //to clear current value
  };
  return (
    <div className="Upload">
      <header className="Upload-header">
        <input
          type="file"
          id="uploadButton"
          hidden
          multiple
          onChange={handleAttachFile}
        />
        <label for="uploadButton">Choose a File</label>
      </header>
      <UploadProgress />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUploadFile: (files) => dispatch(setUploadFile(files)),
});

export default connect(null, mapDispatchToProps)(Upload);

/*import React, { useState } from "react";

export default function UploadButton() {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

  return (
    <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="200" height="300" />
        ) : (
          <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
            <h5 className="text-center">Upload your photo</h5>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}*/
/*
import React from "react";
import { useState } from "react";

export default function GiveSuggestion(props) {
  const [photo, setPhoto] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setPhoto(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    console.log(photo);
    e.preventDefault();
  };

  return (
    <>
      <img src="" alt="logo" />
      <section>
        <form onSubmit={handleSubmit}>
          <label>
            Add a photo
            <br />
            <input type="file" name="photo" onChange={handleChange} />
          </label>
          <br />

          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
}*/
/*
import React from "react";

export default function UploadButton() {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none",
        }}
      />
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "1px dashed black",
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "30%",
            height: "30%",
            position: "relative",
          }}
        />
      </div>
      Click to upload Image
    </div>
  );
}*/

/*import React, { Component } from "react";

export default class MultipleImageUploadComponent extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles(e) {
    e.preventDefault();
    console.log(this.state.file);
  }

  render() {
    return (
      <form>
        <div className="form-group multi-preview">
          {(this.fileArray || []).map((url) => (
            <img src={url} alt="..." />
          ))}
        </div>

        <div className="form-group">
          <input
            type="file"
            className="form-control"
            onChange={this.uploadMultipleFiles}
            multiple
          />
        </div>
        <button
          type="button"
          className="btn btn-danger btn-block"
          onClick={this.uploadFiles}
        >
          Upload
        </button>
      </form>
    );
  }
}
*/
