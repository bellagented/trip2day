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
