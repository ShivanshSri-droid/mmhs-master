import React, { useState, useEffect } from "react";
import "./Setup.css";
import left_arrow from "../../../assets/ic_chevron_left.png";
import right_arrow from "../../../assets/ic_chevron_right.png";
import Fees_Form from "../../../Components/Forms/Fees/Fees_Form";
import DeleteCard from "../../../Components/Cards/DeleteCard/DeleteCard";

const Setup = () => {
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
    fetch("https://mmhs-mumbai.herokuapp.com/feesetup")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch(`https://mmhs-mumbai.herokuapp.com/feesetup/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div className="setup">
      {display1 ? (
        <Fees_Form
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
            <th className="setup__middle_th">Grade</th>
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
                  <button
                    type="button"
                    className="setup__middle_td_edit"
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
                    className="setup__middle_td_delete"
                  >
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
