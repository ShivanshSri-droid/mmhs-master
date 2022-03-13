import React, { useState, useEffect } from "react";
import "./Fees_From.css";
import cancel from "../../../assets/cancel.png";

const Fees_Form = (props) => {
  const [details, setDetails] = useState({
    section: "",
    tuition: "",
    computer: "",
    miscellaneous: "",
    total: "",
    late: "",
    lateFeeDate: "",
  });

  const isEdit = props.isEdit;
  const data = props.data;

  const handleClick2 = () => {
    props.setDisp();
    props.setEdit();
  };

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isEdit) {
      setDetails({
        ...details,
        section: data.section,
        tuition: data.tuition,
        computer: data.computer,
        miscellaneous: data.miscellaneous,
        total: data.total,
        late: data.late,
        late_date: data.lateFeeDate,
      });
    }
  }, [isEdit]);

  const handleSubmit = async () => {
    if (!isEdit) {
      await fetch("https://mmhs-mumbai.herokuapp.com/feesetup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: details.section,
          tuition: details.tuition,
          computer: details.computer,
          miscellaneous: details.miscellaneous,
          total: details.total,
          late: details.late,
          late_date: details.lateFeeDate,
        }),
      });
    } else {
      await fetch(`https://mmhs-mumbai.herokuapp.com/feesetup/${data.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: details.section,
          tuition: details.tuition,
          computer: details.computer,
          miscellaneous: details.miscellaneous,
          total: details.total,
          late: details.late,
          late_date: details.lateFeeDate,
        }),
      });
    }
    window.location.reload();
  };

  return (
    <div className="setup__form_div_open">
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
            name="section"
            defaultValue={isEdit ? data.section : null}
            onChange={handleChange}
            className="setup__form_input_small"
          />
        </div>
        <div className="setup__form_input ">
          <h5>Add Tuition Fee</h5>
          <input
            type="text"
            name="tuition"
            defaultValue={isEdit ? data.tution : null}
            onChange={handleChange}
            className=" setup__form_input_small"
          />
        </div>
        <div className="setup__form_input ">
          <h5>Add Computer Fee</h5>
          <input
            type="text"
            name="computer"
            defaultValue={isEdit ? data.computer : null}
            onChange={handleChange}
            className=" setup__form_input_small"
          />
        </div>
        <div className="setup__form_input ">
          <h5>Add Miscellaneous Fee</h5>
          <input
            type="text"
            name="miscellaneous"
            defaultValue={isEdit ? data.miscellaneous : null}
            onChange={handleChange}
            className=" setup__form_input_small"
          />
        </div>
        <div className="setup__form_input ">
          <h5>Add Total Fee</h5>
          <input
            type="text"
            name="total"
            defaultValue={isEdit ? data.total : null}
            onChange={handleChange}
            className=" setup__form_input_small"
          />
        </div>
        <div className="setup__form_input ">
          <h5>Add Late Fee</h5>
          <input
            type="text"
            name="late"
            defaultValue={isEdit ? data.late : null}
            onChange={handleChange}
            className=" setup__form_input_small"
          />
        </div>
        <div className="setup__form_input ">
          <h5>Add Late Fee Date</h5>
          <input
            type="date"
            class="date"
            onChange={handleChange}
            name="lateFeeDate"
          />
        </div>
        <div className="setup__form_button" onClick={handleSubmit}>
          <p style={{ color: "#fff" }}>Add Fees Setup</p>
        </div>
      </div>
    </div>
  );
};

export default Fees_Form;
