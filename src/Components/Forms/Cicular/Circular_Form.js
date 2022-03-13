import React, { useState, useEffect } from "react";
import "./Circular_Form.css";
import drag_drop from "../../../assets/drag_drop.png";
import calendar from "../../../assets/calendar.png";
import cancel from "../../../assets/cancel.png";
import DeleteCard from "../../Cards/DeleteCard/DeleteCard";

const Circular_Form = (props) => {
  const [details, setDetails] = useState({
    created: "",
    title: "",
    notice: "",
  });

  const isEdit = props.isEdit;
  const data = props.data;

  const handleClick2 = () => {
    props.setDisp();
    props.setEdit();
  };

  useEffect(() => {
    if (isEdit) {
      setDetails({
        ...details,
        created: data.created,
        title: data.title,
        notice: data.notice,
      });
    }
  }, [isEdit]);

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!isEdit) {
      await fetch("https://mmhs-mumbai.herokuapp.com/circulars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          created: details.created,
          title: details.title,
          notice: details.notice,
        }),
      });
    } else {
      await fetch(`https://mmhs-mumbai.herokuapp.com/circulars/${data.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          created: details.created,
          title: details.title,
          notice: details.notice,
        }),
      });
    }
    window.location.reload();
  };

  return (
    <div className={"circular__form_div_open"}>
      <div className="circular__form">
        <div className="circular__from_img" onClick={handleClick2}>
          <img src={cancel} alt="cancel" />
        </div>
        <h1>Add New Circular</h1>
        <div className="circular__form_p">
          <p>quis nostrud exercitation ullamco</p>
        </div>
        <div className="circular__form_input">
          <h5>Add New Circular</h5>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            defaultValue={isEdit ? data.title : null}
            className="circular__form_input_small"
          />
        </div>
        <div className="circular__form_input ">
          <h5>Add Circuar Date</h5>
          <input
            type="date"
            onChange={handleChange}
            class="date"
            name="created"
          />
        </div>
        <div className="circular__form_input">
          <h5>Add Logo</h5>
          <div
            className="circular__form_drop_zone"
            style={{
              background: `url(${drag_drop})`,
              backgroundSize: "contain",
              backgroundSize: "270px 110px",
            }}
          ></div>
        </div>
        <div className="circular__form_input big">
          <h5>Add Circular Notice</h5>
          <textarea
            type="textarea"
            name="notice"
            onChange={handleChange}
            defaultValue={isEdit ? data.notice : null}
            className="circular__form_input_small"
          />
        </div>
        <div className="circular__form_input_checkbox">
          <div className="form-group">
            <input type="checkbox" name="all"></input>
            <label for="all">All</label>
          </div>
          <div className="form-group">
            <input type="checkbox" name="all"></input>
            <label for="all">Nursery</label>
          </div>
          <div className="form-group">
            <input type="checkbox" name="all"></input>
            <label for="all">Pre Primary</label>
          </div>
          <div className="form-group">
            <input type="checkbox" name="all"></input>
            <label for="all">Primary</label>
          </div>
          <div className="form-group">
            <input type="checkbox" name="all"></input>
            <label for="all">Secondary</label>
          </div>
        </div>

        <div className="circular__form_button" onClick={handleSubmit}>
          <p style={{ color: "#fff" }}>Add Circular</p>
        </div>
      </div>
    </div>
  );
};

export default Circular_Form;
