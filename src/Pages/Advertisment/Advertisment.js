import React, { useState, useEffect } from "react";
import "./Advertisment.css";
import left_arrow from "../../assets/ic_chevron_left.png";
import right_arrow from "../../assets/ic_chevron_right.png";
import advertiser_banner from "../../assets/advertiser_banner.png";
import Advertisment_Form from "../../Components/Forms/Advertisment/Advertisment_Form";
import DeleteCard from "../../Components/Cards/DeleteCard/DeleteCard";

const Advertisment = () => {
  const [display1, setDisplay1] = useState(0);
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [del, setDel] = useState(0);
  const [delId, setDelId] = useState(0);

  const handleClick1 = () => {
    setDisplay1(1);
  };

  useEffect(() => {
    fetch("https://mmhs-mumbai.herokuapp.com/advertisements")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch(`https://mmhs-mumbai.herokuapp.com/advertisements/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div className="advertisment">
      {display1 ? (
        <Advertisment_Form
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
      {/* <div
        className={
          value === 0
            ? "advertisment__form_div_not_open"
            : "advertisment__form_div_open"
        }
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
              onChange={handleChange}
              className="advertisment__form_input_small"
            />
          </div>
          <div className="advertisment__form_input ">
            <h5>Add From Date</h5>
            <input
              type="text"
              name="from_dt"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
          <div onClick={handleSubmit} className="advertisment__form_button">
            <p style={{ color: "#fff" }}>Add advertisment</p>
          </div>
        </div>
      </div> */}
      <div className="advertisment__top">
        <div className="advertisment__top_button_left_most">
          <button
            type="button"
            className="advertisment__top_button_advertisment advertisment__top_button_go"
            onClick={handleClick1}
          >
            Add advertisment
          </button>
        </div>
      </div>
      <div className="advertisment__middle">
        <table>
          <tr className="advertisment__middle_tr">
            <th className="advertisment__middle_th">From Date - To Date</th>
            <th className="advertisment__middle_th">Advertiser Name</th>
            <th className="advertisment__middle_th">Advertiser Banner</th>
            <th className="advertisment__middle_th">Advertiser Description</th>
            <th className="advertisment__middle_th"></th>
          </tr>
          {data.map((data) => {
            return (
              <tr className="advertisment__middle_tr">
                <td className="advertisment__middle_td">{data.from_dt}</td>
                <td className="advertisment__middle_td">{data.name}</td>
                <td className="advertisment__middle_td banner">
                  <img src={advertiser_banner}></img>
                </td>
                <td className="advertisment__middle_td">{data.description}</td>
                <td className="advertisment__middle_td">
                  <button
                    type="button"
                    className="advertisment__middle_td_edit"
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
                    className="advertisment__middle_td_delete"
                    onClick={() => {
                      setDel(1);
                      setDelId(data.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="advertisment__bottom">
        <p>Showing 10 from 46 data</p>
        <div className="advertisment__bottom_box">
          <button type="button" className="advertisment__button_box_arrow">
            <img src={left_arrow} alt="left arrow" />
          </button>
          <button
            type="button"
            className="advertisment__bottom_box_selected_num"
          >
            1
          </button>
          <button type="button" className="advertisment__button_box_num">
            2
          </button>
          <button type="button" className="advertisment__button_box_num">
            3
          </button>
          <button type="button" className="advertisment__button_box_num">
            4
          </button>
          <button type="button" className="advertisment__button_box_arrow">
            <img src={right_arrow} alt="left arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisment;
