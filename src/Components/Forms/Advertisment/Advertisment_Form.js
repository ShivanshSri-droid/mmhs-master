import React from 'react';
import "./Advertisment__Form.css";
import drag_drop from "../../../assets/drag_drop.png";
import calendar from "../../../assets/calendar.png";
import cancel from "../../../assets/cancel.png";

const Advertisment_Form = (props) => {

    const handleClick2 = () => {
        props.setDisp();
      }

  return (
    <div
    className={"advertisment__form_div_open"}
    >
    <div className="advertisment__form">
      <div className="advertisment__from_img" onClick={handleClick2}>
        <img src={cancel} alt="cancel" />
      </div>
      <h1>Add New advertisment</h1>
      <div className="advertisment__form_p">
        <p>quis nostrud exercitation ullamco</p>
      </div>
      <div className="advertisment__form_input">
        <h5>Add Advertisment Title</h5>
        <input
          type="text"
          name="name"
          value={props.name}
        //   onChange={handleChange}
          className="advertisment__form_input_small"
        />
      </div>
      <div className="advertisment__form_input ">
        <h5>Add From Date</h5>
        <input
          type="text"
          name="from_dt"
          value={props.fdate}
        //   onChange={handleChange}
          className=" advertisment__form_input_small input_date"
          placeholder="dd/mm/yyyy"
        />
        <img src={calendar} alt="calendar" />
      </div>
      <div className="advertisment__form_input ">
        <h5>Add To Date</h5>
        <input
          type="text"
          name="to_dt"
          value={props.tdate}
        //   onChange={handleChange}
          className=" advertisment__form_input_small input_date"
          placeholder="dd/mm/yyyy"
        />
        <img src={calendar} alt="calendar" />
      </div>
      <div className="advertisment__form_input big">
        <h5>Advertiser Description</h5>

        <input
          type="text"
          name="description"
          value={props.desc}
        //   onChange={handleChange}
          className="advertisment__form_input_small"
        />
      </div>
      <div className="advertisment__form_input">
        <h5>Add Banner</h5>
        <div
          className="advertisment__form_drop_zone"
          style={{
            background: `url(${drag_drop})`,
            backgroundSize: "contain",
            backgroundSize: "270px 110px",
          }}
        ></div>
      </div>
      {/* <div onClick={handleSubmit} className="advertisment__form_button"> */}
      <div className="advertisment__form_button">
        <p style={{ color: "#fff" }}>Add advertisment</p>
      </div>
    </div>
  </div>
  )
}

export default Advertisment_Form