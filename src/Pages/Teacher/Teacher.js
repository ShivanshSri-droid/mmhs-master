import React, { useState, useEffect } from "react";
import "./Teacher.css";
import calendar from "../../assets/calendar.png";
import left_arrow from "../../assets/ic_chevron_left.png";
import right_arrow from "../../assets/ic_chevron_right.png";
import advertiser_banner from "../../assets/advertiser_banner.png";
import upload from "../../assets/upload.png";
import download from "../../assets/download.png";

const tempData = [
  {
    id: "#001234",
    name: "Fanny Siregar",
    email: "test@mmhs.com",
    phone: "987456123",
  },
  {
    id: "#001234",
    name: "Fanny Siregar",
    email: "test@mmhs.com",
    phone: "987456123",
  },
  {
    id: "#001234",
    name: "Fanny Siregar",
    email: "test@mmhs.com",
    phone: "987456123",
  },
  {
    id: "#001234",
    name: "Fanny Siregar",
    email: "test@mmhs.com",
    phone: "987456123",
  },
  {
    id: "#001234",
    name: "Fanny Siregar",
    email: "test@mmhs.com",
    phone: "987456123",
  },
  {
    id: "#001234",
    name: "Fanny Siregar",
    email: "test@mmhs.com",
    phone: "987456123",
  },
  {
    id: "#001234",
    name: "Fanny Siregar",
    email: "test@mmhs.com",
    phone: "987456123",
  },
  {
    id: "#001234",
    name: "Fanny Siregar",
    email: "test@mmhs.com",
    phone: "987456123",
  },
  {
    id: "#001234",
    name: "Fanny Siregar",
    email: "test@mmhs.com",
    phone: "987456123",
  },
  {
    id: "#001234",
    name: "Fanny Siregar",
    email: "test@mmhs.com",
    phone: "987456123",
  },
  {
    id: "#001234",
    name: "Fanny Siregar",
    email: "test@mmhs.com",
    phone: "987456123",
  },
];

const Teacher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mmhs-mumbai.herokuapp.com/teachers")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <div className="teacher">
      <div className="teacher__top">
        <div className="teacher__top_button">
          <button type="button" className="teacher__top_button_button">
            <img
              className="teacher__top_button_img"
              src={upload}
              alt="upload"
            />
            Upload Master
          </button>
        </div>
        <div className="teacher__top_button">
          <button type="button" className="teacher__top_button_button">
            <img
              className="teacher__top_button_img"
              src={download}
              alt="upload"
            />
            Download Master
          </button>
        </div>
      </div>
      <div className="teacher__middle">
        <table>
          <tr className="teacher__middle_tr">
            <th className="teacher__middle_th">Teacher Id</th>
            <th className="teacher__middle_th">Teacher Name</th>
            <th className="teacher__middle_th">Teacher E-mail</th>
            <th className="teacher__middle_th">Teacher's Phone</th>
            <th className="teacher__middle_th"></th>
          </tr>
          {data.map((data) => {
            return (
              <tr className="teacher__middle_tr">
                <td className="teacher__middle_td">{data.teacher_id}</td>
                <td className="teacher__middle_td">{data.name}</td>
                <td className="teacher__middle_td banner">{data.email}</td>
                <td className="teacher__middle_td">{data.phone}</td>
                <td className="teacher__middle_td teacher__middle_td_gp">
                  <div className="teacher__middle_td_generate_password">
                    <a href="#">Generate Password</a>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="teacher__bottom">
        <p>Showing 10 from 46 data</p>
        <div className="teacher__bottom_box">
          <button type="button" className="teacher__button_box_arrow">
            <img src={left_arrow} alt="left arrow" />
          </button>
          <button type="button" className="teacher__bottom_box_selected_num">
            1
          </button>
          <button type="button" className="teacher__button_box_num">
            2
          </button>
          <button type="button" className="teacher__button_box_num">
            3
          </button>
          <button type="button" className="teacher__button_box_num">
            4
          </button>
          <button type="button" className="teacher__button_box_arrow">
            <img src={right_arrow} alt="left arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
