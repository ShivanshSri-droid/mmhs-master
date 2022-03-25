import React, { useState, useEffect } from "react";
import "./Student_Management.css";
import upload from "../../assets/upload.png";
import download from "../../assets/download.png";
import email from "../../assets/email.png";
import left_arrow from "../../assets/ic_chevron_left.png";
import right_arrow from "../../assets/ic_chevron_right.png";
import GeneratePassword from "../../Components/GeneratePassword/GeneratePassword";

const Student_Management = () => {
  const [data, setData] = useState([]);
  const [display, setDiplay] = useState(0);
  const [activate, setActivate] = useState(false);

  useEffect(() => {
    fetch("https://mmhs-mumbai.herokuapp.com/students")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <div className="student">
      {display ? (
        <GeneratePassword
          setDisp={() => {
            setDiplay(0);
          }}
        />
      ) : null}
      <div className="student__top">
        <div className="student__top_button">
          <button type="button" className="student__top_button_button">
            <img
              className="student__top_button_img"
              src={upload}
              alt="upload"
            />
            Upload Master
          </button>
        </div>
        <div className="student__top_button">
          <button type="button" className="student__top_button_button">
            <img
              className="student__top_button_img"
              src={download}
              alt="upload"
            />
            Download Master
          </button>
        </div>
      </div>
      <div className="student__middle">
        <table>
          <tr className="student__middle_tr">
            <th className="student__middle_th">GR Number</th>
            <th className="student__middle_th">Name</th>
            <th className="student__middle_th">Class</th>
            <th className="student__middle_th">Section</th>
            <th className="student__middle_th">Grade</th>
            <th className="student__middle_th">Mother Name</th>
            <th className="student__middle_th">Mother E-mail</th>
            <th className="student__middle_th">Mother’s phone</th>
            <th className="student__middle_th">Father Name</th>
            <th className="student__middle_th">Father E-mail</th>
            <th className="student__middle_th">Father’s phone</th>
            <th className="student__middle_th">Contact</th>
            <th className="student__middle_th"> </th>
            <th className="student__middle_th"> </th>
          </tr>
          {data.map((data) => {
            return (
              <tr className="student__middle_tr">
                <td className="student__middle_td">{data.gr}</td>
                <td className="student__middle_td">{data.name}</td>
                <td className="student__middle_td">{data.class}</td>
                <td className="student__middle_td">{data.section}</td>
                <td className="student__middle_td">{data.grade}</td>
                <td className="student__middle_td">{data.mother_name}</td>
                <td className="student__middle_td">{data.mother_email}</td>
                <td className="student__middle_td">{data.mother_phone}</td>
                <td className="student__middle_td">{data.father_name}</td>
                <td className="student__middle_td">
                  <a href={`mailto:${data.father_email}`}></a>
                </td>
                <td className="student__middle_td">{data.father_phone}</td>
                <td className="student__middle_td">
                  <a href="#">
                    <img src={email} />
                  </a>
                </td>
                <td className="student__middle_td">
                  <div
                    className="student__middle_td_activate"
                    style={
                      activate
                        ? { backgroundColor: "#1eae7a" }
                        : { backgroundColor: "#cb444a" }
                    }
                    onClick={() => {
                      setActivate(!activate);
                    }}
                  >
                    <a href="#">{activate ? "Activate" : "Deactivate"}</a>
                  </div>
                </td>
                <td className="student__middle_td">
                  <div
                    className="student__middle_td_generate_password"
                    onClick={() => {
                      setDiplay(1);
                    }}
                  >
                    <a href="#">Generate Password</a>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="student__bottom">
        <p>Showing 10 from 46 data</p>
        <div className="student__bottom_box">
          <button type="button" className="student__button_box_arrow">
            <img src={left_arrow} alt="left arrow" />
          </button>
          <button type="button" className="student__bottom_box_selected_num">
            1
          </button>
          <button type="button" className="student__button_box_num">
            2
          </button>
          <button type="button" className="student__button_box_num">
            3
          </button>
          <button type="button" className="student__button_box_num">
            4
          </button>
          <button type="button" className="student__button_box_arrow">
            <img src={right_arrow} alt="left arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Student_Management;
