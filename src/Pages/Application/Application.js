import React, { useState, useEffect } from "react";
import "./Application.css";
import calendar from "../../assets/calendar.png";
import email from "../../assets/email.png";
import left_arrow from "../../assets/ic_chevron_left.png";
import right_arrow from "../../assets/ic_chevron_right.png";

const Application = (props) => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    fetch("https://mmhs-mumbai.herokuapp.com/applications")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleFilter = async () => {
    fetch(`https://mmhs-mumbai.herokuapp.com/applications/?dt=${startDate}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div className="application">
      <div className="application__top">
        <div className="application__top_button">
          <div className="filter-container">
            <div className="datepicker-container">
              {/* <p>From:</p> */}
              {/* <DatePicker
                selected={startDate}
                className="datepicker"
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
              /> */}
              <input
                type="date"
                name=""
                className="datepicker"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            </div>
            {/* <div className="datepicker-container">
              <p>To:</p>
              <input
                type="date"
                name=""
                className="datepicker"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </div> */}
          </div>
        </div>
        <div className="application__top_button">
          <button
            type="button"
            className="application__top_button_go"
            onClick={handleFilter}
          >
            Go
          </button>
          <button
            type="button"
            className="circular__top_button_go"
            onClick={() => {
              window.location.reload();
            }}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="application__middle">
        <table>
          <tr className="application__middle_tr">
            <th className="application__middle_th">GR Number</th>
            <th className="application__middle_th">Name</th>
            <th className="application__middle_th">Class</th>
            {/* <th className="application__middle_th">Section</th> */}
            <th className="application__middle_th">Grade</th>
            <th className="application__middle_th">Application Type</th>
            <th className="application__middle_th">Request Date</th>
            <th className="application__middle_th">Contact</th>
            <th className="application__middle_th">Status</th>
          </tr>
          {data.map((data) => {
            return (
              <tr className="application__middle_tr">
                <td className="application__middle_td">{data.gr}</td>
                <td className="application__middle_td">{data.name}</td>
                <td className="application__middle_td">{data.class}</td>
                {/* <td className="application__middle_td">{data.section}</td> */}
                <td className="application__middle_td">{data.grade}</td>
                <td className="application__middle_td">
                  {data.application_type}
                </td>
                <td className="application__middle_td">{data.requested}</td>
                <td className="application__middle_td">
                  <a href="#">
                    <img src={email} />
                  </a>
                </td>
                <td className="application__middle_td">
                  <div>
                    <button
                      type="button"
                      className={`application__middle_td_status  ${
                        data.status === "pending" ? "pending" : "proceed"
                      }`}
                    >{`${
                      data.status === "pending" ? "Pending" : "Proceed"
                    }`}</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="application__bottom">
        <p>Showing 10 from 46 data</p>
        <div className="application__bottom_box">
          <button type="button" className="application__button_box_arrow">
            <img src={left_arrow} alt="left arrow" />
          </button>
          <button
            type="button"
            className="application__bottom_box_selected_num"
          >
            1
          </button>
          <button type="button" className="application__button_box_num">
            2
          </button>
          <button type="button" className="application__button_box_num">
            3
          </button>
          <button type="button" className="application__button_box_num">
            4
          </button>
          <button type="button" className="application__button_box_arrow">
            <img src={right_arrow} alt="left arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application;
