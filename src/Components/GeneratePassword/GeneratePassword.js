import React, { useState } from "react";
import "./generatePassword.css";
import close from "../../assets/cancel.png";

const GeneratePassword = (props) => {
  const [password, setPassword] = useState("");
  const [custom, setCustom] = useState(false);

  function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

  const generatePass = async () => {
    let pass = Math.random().toString(36).slice(2);
    document.getElementById("pass").value = pass;
    copyToClipboard(pass);
    await fetch(`https://mmhs-mumbai.herokuapp.com/students/pass/${props.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: pass,
      }),
    });
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const setPass = async () => {
    await fetch(`https://mmhs-mumbai.herokuapp.com/students/pass/${props.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: password,
      }),
    });
    copyToClipboard(password);
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
      <input type="text" id="pass" onChange={handleChange}></input>
      <br></br>
      {custom ? (
        <p className="gen-pass" onClick={setPass()}>
          Set Custom Password
        </p>
      ) : (
        <p className="gen-pass" onClick={generatePass}>
          Generate New Password
        </p>
      )}
      <br></br>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <button>Copy</button>
        {custom ? (
          <p
            style={{
              marginBottom: "6px",
              fontSize: "14px",
              color: "blue",
              marginLeft: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setCustom(false);
            }}
          >
            Generate
          </p>
        ) : (
          <p
            style={{
              marginBottom: "6px",
              fontSize: "14px",
              color: "blue",
              marginLeft: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setCustom(true);
            }}
          >
            Manual
          </p>
        )}
      </div>
    </div>
  );
};

export default GeneratePassword;
