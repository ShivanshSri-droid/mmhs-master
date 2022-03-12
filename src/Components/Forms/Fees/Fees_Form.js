import React from 'react';
import "./Fees_From.css";
import drag_drop from "../../../assets/drag_drop.png";
import calendar from "../../../assets/calendar.png";
import cancel from "../../../assets/cancel.png";


const Fees_Form = (props) => {

    const handleClick2 = () => {
        props.setDisp();
      }

  return (
    <div
    className="setup__form_div_open"
  >
    <div className="setup__form">
      <div className="setup__from_img" onClick={handleClick2}>
        <img src={cancel} alt="cancel" />
      </div>
      <h1>Add New Fees Setup</h1>
      <div className="setup__form_p">
        <p>quis nostrud exercitation ullamco</p>
      </div>
      <div className="setup__form_input">
        <h5>Add Grade</h5>
        <input
          type="text"
          value={props.value}
          name="section"
        //   onChange={handleChange}
          className="setup__form_input_small"
        />
      </div>
      <div className="setup__form_input ">
        <h5>Add Tuition Fee</h5>
        <input
          type="text"
          value={props.t_fees}
          name="tuition"
        //   onChange={handleChange}
          className=" setup__form_input_small"
        />
      </div>
      <div className="setup__form_input ">
        <h5>Add Computer Fee</h5>
        <input
          type="text"
          value={props.c_fees}
          name="computer"
        //   onChange={handleChange}
          className=" setup__form_input_small"
        />
      </div>
      <div className="setup__form_input ">
        <h5>Add Miscellaneous Fee</h5>
        <input
          type="text"
          value={props.m_fees}
          name="miscellaneous"
        //   onChange={handleChange}
          className=" setup__form_input_small"
        />
      </div>
      <div className="setup__form_input ">
        <h5>Add Total Fee</h5>
        <input
          type="text"
          value={props.total_fees}
          name="total"
        //   onChange={handleChange}
          className=" setup__form_input_small"
        />
      </div>
      <div className="setup__form_input ">
        <h5>Add Late Fee</h5>
        <input
          type="text"
          value={props.l_fees}
          name="late"
        //   onChange={handleChange}
          className=" setup__form_input_small"
        />
      </div>
      <div className="setup__form_input ">
        <h5>Add Late Fee Date</h5>
        <input
          type="text"
          value={props.l_date}
          name="lateFeeDate"
        //   onChange={handleChange}
          className=" setup__form_input_small input_date"
        />
        <img src={calendar} alt="calendar" />
      </div>
      {/* <div className="setup__form_button" onClick={handleSubmit}> */}
      <div className="setup__form_button">
        <p style={{ color: "#fff" }}>Add Fees Setup</p>
      </div>
    </div>
  </div>
  )
}

export default Fees_Form