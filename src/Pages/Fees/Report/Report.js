import React, { useState, useEffect } from "react";
import "./Report.css";
import left_arrow from "../../../assets/ic_chevron_left.png";
import right_arrow from "../../../assets/ic_chevron_right.png";
import calendar from "../../../assets/calendar.png";
import classes from "../../../assets/classes.png";
import payment from "../../../assets/payment.png";
import download from "../../../assets/download.png";
import ActivateCard from "../../../Components/Cards/ActivateCard/ActivateCard";

const Report = () => {
  const [data, setData] = useState([]);
  const [paid, setPaid] = useState(0);
  const [filterPaid, setFilterPaid] = useState();
  const [filterUnpaid, setFilterUnpaid] = useState();
  const [isModal, setIsModal] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    fetch("https://mmhs-mumbai.herokuapp.com/feereport")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleFilter = () => {
    if (filterPaid) {
      fetch(
        `https://mmhs-mumbai.herokuapp.com/feereport/unpaid=${filterUnpaid}`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
    if (startDate) {
      fetch(`https://mmhs-mumbai.herokuapp.com/feereport/?dt=${startDate}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
    // fetch(
    //   `https://mmhs-mumbai.herokuapp.com/feereport/paid=${filterPaid}/unpaid=${filterUnpaid}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setData(data);
    //   });
    // console.log(filterPaid);
  };

  console.log(data);

  return (
    <div className="report">
      {isModal ? (
        <ActivateCard
          action={() => {
            setPaid(!paid);
            setIsModal(0);
          }}
          close={() => {
            setIsModal(0);
          }}
        />
      ) : null}
      <div className="report__top">
        <div className="report__top_left">
          {/* <div className="report__top_button">
            <button type="button" className="report__top_button_date">
              <img
                className="report__top_button_date_img"
                src={classes}
                alt="upload"
              />
              Class
            </button>
          </div> */}
          <div className="report__top_button">
            <input
              type="date"
              name=""
              className="datepicker"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div className="report__top_button">
            <button
              type="button"
              className="report__top_button_date"
              style={
                filterPaid
                  ? { backgroundColor: "#e6e3e3" }
                  : { backgroundColor: "#fff" }
              }
              onClick={() => {
                setFilterPaid(true);
                setFilterUnpaid(false);
              }}
            >
              {/* <img
                className="report__top_button_img"
                src={payment}
                alt="upload"
              /> */}
              Paid
            </button>
            <button
              type="button"
              className="report__top_button_date"
              style={
                filterUnpaid
                  ? { backgroundColor: "#e6e3e3" }
                  : { backgroundColor: "#fff" }
              }
              onClick={() => {
                setFilterUnpaid(true);
                setFilterPaid(false);
              }}
            >
              {/* <img
                className="report__top_button_img"
                src={payment}
                alt="upload"
              /> */}
              Unpaid
            </button>
          </div>
          <div className="report__top_button">
            <button
              type="button"
              className="report__top_button_go"
              onClick={handleFilter}
            >
              Go
            </button>
            <button
              type="button"
              className="report__top_button_go"
              onClick={() => {
                window.location.reload();
              }}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="report__top_right">
          <div className="report__top_button">
            <button type="button" className="report__top_button_button">
              <img
                className="report__top_button_img"
                src={download}
                alt="upload"
              />
              Download .CSV
            </button>
          </div>
        </div>
      </div>
      <div className="report__middle">
        <table>
          <tr className="report__middle_tr">
            <th className="report__middle_th">GR Number</th>
            <th className="report__middle_th">Name</th>
            <th className="report__middle_th">Section</th>
            <th className="report__middle_th">Payment Date</th>
            <th className="report__middle_th">Tution Fee</th>
            <th className="report__middle_th">Computer Fee</th>
            <th className="report__middle_th misc">Miscellaneous Fee</th>
            <th className="report__middle_th">Late Fee</th>
            <th className="report__middle_th">Due Amount</th>
            <th className="report__middle_th">Paid Fee</th>
            <th className="report__middle_th">Payment Status</th>
          </tr>
          {data.map((data) => {
            return (
              <tr className="report__middle_tr scroll">
                <td className="report__middle_td">{data.gr}</td>
                <td className="report__middle_td">{data.name}</td>
                {/* <td className="report__middle_td">{data.class}</td> */}
                <td className="report__middle_td">{data.section}</td>
                <td className="report__middle_td">{data.payment_dt}</td>
                <td className="report__middle_td">{data.tuition_fee}</td>
                <td className="report__middle_td banner">
                  {data.computer_fee}
                </td>
                <td className="report__middle_td">{data.miscellaneous_fee}</td>
                <td className="report__middle_td">{data.late_fee}</td>
                <td className="report__middle_td">{data.due_amt}</td>
                <td className="report__middle_td">
                  {/* <div>
                    <button
                      type="button"
                      className={`report__middle_td_status  ${
                        data.status !== "Unpaid" ? "paid" : "unpaid"
                      }`}
                    >{`${
                      data.status !== "Unpaid" ? "Paid" : "Unpaid"
                    }`}</button>
                  </div> */}
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsModal(1);
                      }}
                      className={`report__middle_td_status  ${
                        paid ? "paid" : "unpaid"
                      }`}
                    >{`${paid ? "Paid" : "Unpaid"}`}</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="report__bottom">
        <p>Showing 10 from 46 data</p>
        <div className="report__bottom_box">
          <button type="button" className="report__button_box_arrow">
            <img src={left_arrow} alt="left arrow" />
          </button>
          <button type="button" className="report__bottom_box_selected_num">
            1
          </button>
          <button type="button" className="report__button_box_num">
            2
          </button>
          <button type="button" className="report__button_box_num">
            3
          </button>
          <button type="button" className="report__button_box_num">
            4
          </button>
          <button type="button" className="report__button_box_arrow">
            <img src={right_arrow} alt="left arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
