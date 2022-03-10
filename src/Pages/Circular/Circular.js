import React, { useState, useEffect } from "react";
import "./Circular.css";
import calendar from "../../assets/calendar.png";
import left_arrow from "../../assets/ic_chevron_left.png";
import right_arrow from "../../assets/ic_chevron_right.png";
import cancel from "../../assets/cancel.png";
import drag_drop from "../../assets/drag_drop.png";

const tempData = [
  {
    date: "12 / 12 / 2021",
    title: "Covid circular for school",
    notice: "Duis aute irure dolor in reprehenderit ...",
    attachment: "reprehenderit voluptate.jpg",
  },
  {
    date: "12 / 12 / 2021",
    title: "Covid circular for school",
    notice: "Duis aute irure dolor in reprehenderit ...",
    attachment: "reprehenderit voluptate.jpg",
  },
  {
    date: "12 / 12 / 2021",
    title: "Covid circular for school",
    notice: "Duis aute irure dolor in reprehenderit ...",
    attachment: "reprehenderit voluptate.jpg",
  },
  {
    date: "12 / 12 / 2021",
    title: "Covid circular for school",
    notice: "Duis aute irure dolor in reprehenderit ...",
    attachment: "reprehenderit voluptate.jpg",
  },
  {
    date: "12 / 12 / 2021",
    title: "Covid circular for school",
    notice: "Duis aute irure dolor in reprehenderit ...",
    attachment: "reprehenderit voluptate.jpg",
  },
  {
    date: "12 / 12 / 2021",
    title: "Covid circular for school",
    notice: "Duis aute irure dolor in reprehenderit ...",
    attachment: "reprehenderit voluptate.jpg",
  },
  {
    date: "12 / 12 / 2021",
    title: "Covid circular for school",
    notice: "Duis aute irure dolor in reprehenderit ...",
    attachment: "reprehenderit voluptate.jpg",
  },
  {
    date: "12 / 12 / 2021",
    title: "Covid circular for school",
    notice: "Duis aute irure dolor in reprehenderit ...",
    attachment: "reprehenderit voluptate.jpg",
  },
  {
    date: "12 / 12 / 2021",
    title: "Covid circular for school",
    notice: "Duis aute irure dolor in reprehenderit ...",
    attachment: "reprehenderit voluptate.jpg",
  },
  {
    date: "12 / 12 / 2021",
    title: "Covid circular for school",
    notice: "Duis aute irure dolor in reprehenderit ...",
    attachment: "reprehenderit voluptate.jpg",
  },
  {
    date: "12 / 12 / 2021",
    title: "Covid circular for school",
    notice: "Duis aute irure dolor in reprehenderit ...",
    attachment: "reprehenderit voluptate.jpg",
  },
];

const Circular = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  const handleClick1 = () => {
    setValue(1);
  };
  const handleClick2 = () => {
    setValue(0);
  };

  useEffect(() => {
    fetch("https://mmhs-mumbai.herokuapp.com/circulars")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <div className="circular">
      <div
        className={
          value === 0
            ? "circular__form_div_not_open"
            : "circular__form_div_open"
        }
      >
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
            <input type="text" className="circular__form_input_small" />
          </div>
          <div className="circular__form_input ">
            <h5>Add Circuar Date</h5>
            <input
              type="text"
              className=" circular__form_input_small input_date"
            />
            <img src={calendar} alt="calendar" />
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
            <input type="text" className="circular__form_input_small" />
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

          <div className="circular__form_button">
            <a href="#">Add Circular</a>
          </div>
        </div>
      </div>
      <div className="circular__top">
        <div className="circular__top_button">
          <button type="button" className="circular__top_button_date">
            <img
              className="circular__top_button_date_img"
              src={calendar}
              alt="upload"
            />
            Date
          </button>
        </div>
        <div className="circular__top_button">
          <button type="button" className="circular__top_button_go">
            Go
          </button>
        </div>
        <div className="circular__top_button_left_most">
          <button
            type="button"
            className="circular__top_button_circular circular__top_button_go"
            onClick={handleClick1}
          >
            Add Circular
          </button>
        </div>
      </div>
      <div className="circular__middle">
        <table>
          <tr className="circular__middle_tr">
            <th className="circular__middle_th">Date</th>
            <th className="circular__middle_th">Title</th>
            <th className="circular__middle_th">Notice</th>
            <th className="circular__middle_th">Attachment</th>
            <th className="circular__middle_th"></th>
          </tr>
          {data.map((data) => {
            return (
              <tr className="circular__middle_tr">
                <td className="circular__middle_td">{data.created}</td>
                <td className="circular__middle_td">{data.title}</td>
                <td className="circular__middle_td">{data.notice}</td>
                <td className="circular__middle_td">{data.attachment}</td>
                <td className="circular__middle_td">
                  <button type="button" className="circular__middle_td_edit">
                    Edit
                  </button>
                  <button type="button" className="circular__middle_td_delete">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="circular__bottom">
        <p>Showing 10 from 46 data</p>
        <div className="circular__bottom_box">
          <button type="button" className="circular__button_box_arrow">
            <img src={left_arrow} alt="left arrow" />
          </button>
          <button type="button" className="circular__bottom_box_selected_num">
            1
          </button>
          <button type="button" className="circular__button_box_num">
            2
          </button>
          <button type="button" className="circular__button_box_num">
            3
          </button>
          <button type="button" className="circular__button_box_num">
            4
          </button>
          <button type="button" className="circular__button_box_arrow">
            <img src={right_arrow} alt="left arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Circular;
