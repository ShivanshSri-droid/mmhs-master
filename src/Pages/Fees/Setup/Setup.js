import React, { useState, useEffect } from "react";
import "./Setup.css";
import left_arrow from "../../../assets/ic_chevron_left.png";
import right_arrow from "../../../assets/ic_chevron_right.png";
import advertiser_banner from "../../../assets/advertiser_banner.png";
import cancel from "../../../assets/cancel.png";
import calendar from "../../../assets/calendar.png";
import drag_drop from "../../../assets/drag_drop.png";

const Setup = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [details, setDetails] = useState({
    section: "",
    tuition: "",
    computer: "",
    miscellaneous: "",
    total: "",
    late: "",
    lateFeeDate: "",
  });

  const handleClick1 = () => {
    setValue(1);
  };
  const handleClick2 = () => {
    setValue(0);
  };

  useEffect(() => {
    fetch("https://mmhs-mumbai.herokuapp.com/feesetup")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
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
    window.location.reload();
    console.log(details);
  };

  return (
    <div className="setup">
      <div
        className={
          value === 0 ? "setup__form_div_not_open" : "setup__form_div_open"
        }
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
              name="section"
              onChange={handleChange}
              className="setup__form_input_small"
            />
          </div>
          <div className="setup__form_input ">
            <h5>Add Tuition Fee</h5>
            <input
              type="text"
              name="tuition"
              onChange={handleChange}
              className=" setup__form_input_small"
            />
          </div>
          <div className="setup__form_input ">
            <h5>Add Computer Fee</h5>
            <input
              type="text"
              name="computer"
              onChange={handleChange}
              className=" setup__form_input_small"
            />
          </div>
          <div className="setup__form_input ">
            <h5>Add Miscellaneous Fee</h5>
            <input
              type="text"
              name="miscellaneous"
              onChange={handleChange}
              className=" setup__form_input_small"
            />
          </div>
          <div className="setup__form_input ">
            <h5>Add Total Fee</h5>
            <input
              type="text"
              name="total"
              onChange={handleChange}
              className=" setup__form_input_small"
            />
          </div>
          <div className="setup__form_input ">
            <h5>Add Late Fee</h5>
            <input
              type="text"
              name="late"
              onChange={handleChange}
              className=" setup__form_input_small"
            />
          </div>
          <div className="setup__form_input ">
            <h5>Add Late Fee Date</h5>
            <input
              type="text"
              name="lateFeeDate"
              onChange={handleChange}
              className=" setup__form_input_small input_date"
            />
            <img src={calendar} alt="calendar" />
          </div>
          <div className="setup__form_button" onClick={handleSubmit}>
            <p style={{ color: "#fff" }}>Add Fees Setup</p>
          </div>
        </div>
      </div>
      {/* <div className="setup__top">
                <div className="setup__top_button_left_most">
                    <button type="button" className="setup__top_button_setup setup__top_button_go">Add setup</button>
                </div>
          </div>
          <div className="setup__middle"></div>
          <div className="setup__bottom"></div> */}
      <div className="setup__top">
        <div className="setup__top_button_left_most">
          <button
            type="button"
            className="setup__top_button_setup setup__top_button_go"
            onClick={handleClick1}
          >
            Add Fees setup
          </button>
        </div>
      </div>
      <div className="setup__middle">
        <table>
          <tr className="setup__middle_tr">
            <th className="setup__middle_th">Section</th>
            <th className="setup__middle_th">Tution Fee</th>
            <th className="setup__middle_th">Computer Fee</th>
            <th className="setup__middle_th">Miscellaneous Fee</th>
            <th className="setup__middle_th">Total Fee</th>
            <th className="setup__middle_th">Late Fee</th>
            <th className="setup__middle_th">Late Fees Date</th>
            <th className="setup__middle_th"></th>
          </tr>
          {data.map((data) => {
            return (
              <tr className="setup__middle_tr scroll">
                <td className="setup__middle_td">{data.section}</td>
                <td className="setup__middle_td">{data.tution}</td>
                <td className="setup__middle_td banner">{data.computer}</td>
                <td className="setup__middle_td">{data.miscellaneous}</td>
                <td className="setup__middle_td">{data.total}</td>
                <td className="setup__middle_td">{data.late}</td>
                <td className="setup__middle_td">{data.late_date}</td>
                <td className="setup__middle_td">
                  <button type="button" className="setup__middle_td_edit">
                    Edit
                  </button>
                  <button type="button" className="setup__middle_td_delete">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="setup__bottom">
        <p>Showing 10 from 46 data</p>
        <div className="setup__bottom_box">
          <button type="button" className="setup__button_box_arrow">
            <img src={left_arrow} alt="left arrow" />
          </button>
          <button type="button" className="setup__bottom_box_selected_num">
            1
          </button>
          <button type="button" className="setup__button_box_num">
            2
          </button>
          <button type="button" className="setup__button_box_num">
            3
          </button>
          <button type="button" className="setup__button_box_num">
            4
          </button>
          <button type="button" className="setup__button_box_arrow">
            <img src={right_arrow} alt="left arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setup;
