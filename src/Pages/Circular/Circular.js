import React, { useState, useEffect } from "react";
import "./Circular.css";
import calendar from "../../assets/calendar.png";
import left_arrow from "../../assets/ic_chevron_left.png";
import right_arrow from "../../assets/ic_chevron_right.png";
import Circular_Form from "../../Components/Forms/Cicular/Circular_Form";
import cancel from "../../assets/cancel.png";
import drag_drop from "../../assets/drag_drop.png";
import DeleteCard from "../../Components/Cards/DeleteCard/DeleteCard";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Circular = () => {
  const [display1, setDisplay1] = useState(0);
  const [del, setDel] = useState(0);
  const [delId, setDelId] = useState(0);
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const handleClick1 = () => {
    setDisplay1(1);
  };

  useEffect(() => {
    fetch("https://mmhs-mumbai.herokuapp.com/circulars")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch(`https://mmhs-mumbai.herokuapp.com/circulars/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  const handleFilter = async () => {
    fetch(`https://mmhs-mumbai.herokuapp.com/circulars/?dt=${startDate}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  console.log(data);

  return (
    <div className="circular">
      {display1 ? (
        <Circular_Form
          setDisp={() => {
            setDisplay1(0);
          }}
          data={editData}
          isEdit={isEdit}
          setEdit={() => {
            setIsEdit(false);
          }}
        />
      ) : null}
      {del ? (
        <DeleteCard
          del={() => {
            handleDelete(delId);
          }}
          close={() => {
            setDel(0);
          }}
        />
      ) : null}
      <div className="circular__top">
        <div className="circular__top_button">
          {/* <input type="date" name="" id="" /> */}
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
          {/* <button type="button" className="circular__top_button_date">
            <img
              className="circular__top_button_date_img"
              src={calendar}
              alt="upload"
            />
            Date
          </button> */}
        </div>
        <div className="circular__top_button">
          <button
            type="button"
            className="circular__top_button_go"
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
          {data?.map((data) => {
            return (
              <tr className="circular__middle_tr">
                <td className="circular__middle_td">{data.created}</td>
                <td className="circular__middle_td">{data.title}</td>
                <td className="circular__middle_td">{data.notice}</td>
                <td className="circular__middle_td">
                  <a
                    href={data.attachment}
                    style={{
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    download
                  >
                    Download
                  </a>
                  {/* <img
                    src={data?.attachment}
                    alt=""
                    style={{ width: "300px", height: "150px" }}
                  /> */}
                </td>
                <td className="circular__middle_td">
                  <button
                    type="button"
                    className="circular__middle_td_edit"
                    onClick={() => {
                      setIsEdit(true);
                      setEditData(data);
                      setDisplay1(1);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDel(1);
                      setDelId(data.id);
                    }}
                    className="circular__middle_td_delete"
                  >
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
