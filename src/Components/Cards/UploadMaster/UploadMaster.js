import React, { useState } from "react";
import "./uploadMaster.css";
import axios from "axios";

const UploadMaster = ({ close }) => {
  const [file, setFile] = useState();

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    // fetch("https://mmhs-mumbai.herokuapp.com/students/upload", {
    //   method: "POST",
    //   body: file,
    // });
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(
        "https://mmhs-mumbai.herokuapp.com/students/upload",
        formData,
        {
          mode: "no-cors",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="delete-card upload-master">
      <form onSubmit={handleFileUpload}>
        <input type="file" name="file" onChange={handleUpload} />
        <input type="submit" value="Upload" className="upload_btn" />
        <button onClick={close}>No</button>
      </form>
    </div>
  );
};

export default UploadMaster;
