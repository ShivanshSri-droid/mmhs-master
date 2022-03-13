import React from "react";
import "./generatePassword.css";
import close from "../../assets/cancel.png";

const GeneratePassword = (props) => {
  const generatePass = () => {
    document.getElementById("pass").value = Math.random().toString(36).slice(2);
  };

  return (
    <div className="gen-card">
      <img
        src={close}
        className="close"
        onClick={() => {
          props.setDisp();
        }}
        alt=""
      ></img>
      <p className="gen-title">New Password For</p>
      <p>GR Number #123456</p>
      <input type="text" id="pass"></input>
      <br></br>
      <p className="gen-pass" onClick={generatePass}>
        Generate New Password
      </p>
      <br></br>
      <button
        onClick={() => {
          props.setDisp();
        }}
      >
        Send
      </button>
    </div>
  );
};

export default GeneratePassword;
