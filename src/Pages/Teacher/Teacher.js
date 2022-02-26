import React from 'react';
import "./Teacher.css";
import calendar from "../../assets/calendar.png";
import left_arrow from "../../assets/ic_chevron_left.png";
import right_arrow  from "../../assets/ic_chevron_right.png";
import advertiser_banner  from "../../assets/advertiser_banner.png";
import upload from "../../assets/upload.png";
import download from "../../assets/download.png";

const tempData = [
    {
        date: "12 / 12 / 2021",
        title: "Covid teacher for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid teacher for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid teacher for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid teacher for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid teacher for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid teacher for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid teacher for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid teacher for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid teacher for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid teacher for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid teacher for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
]


const Teacher = () => {
  return (
      <div className="teacher">
          <div className="teacher__top">
            <div className="teacher__top_button">
                <button type="button"  className="teacher__top_button_button">
                    <img className="teacher__top_button_img" src={upload} alt="upload" />   
                    Upload Master
                </button>
            </div>
            <div className="teacher__top_button">
                <button type="button"  className="teacher__top_button_button">
                    <img className="teacher__top_button_img" src={download} alt="upload" />   
                    Download Master
                </button>
            </div>
        </div>
          <div className="teacher__middle">
            <table >
                <tr className="teacher__middle_tr" >
                    <th className="teacher__middle_th">Teacher Id</th>
                    <th className="teacher__middle_th">Teacher Name</th>
                    <th className="teacher__middle_th">Teacher E-mail</th>
                    <th className="teacher__middle_th">Teacher's Phone</th>
                    <th className="teacher__middle_th"></th>
                </tr>
                {tempData.map((data)=>{
                    return(
                        <tr className="teacher__middle_tr" >
                            <td className="teacher__middle_td">{data.date}</td>
                            <td className="teacher__middle_td">{data.title}</td>
                            <td className="teacher__middle_td banner"><img src={advertiser_banner}></img></td>
                            <td className="teacher__middle_td">{data.notice}</td>
                            <td className="teacher__middle_td"><button type="button" className="teacher__middle_td_edit">Edit</button><button type="button" className="teacher__middle_td_delete">Delete</button></td>
                        </tr>
                    );
                })}
                
            </table>
          </div>
          <div className="teacher__bottom">
          <p>Showing 10 from 46 data</p>
              <div className="teacher__bottom_box">
                <button type="button" className="teacher__button_box_arrow"><img src={left_arrow} alt="left arrow"/></button>
                <button type="button" className="teacher__bottom_box_selected_num" >1</button>
                <button type="button" className="teacher__button_box_num" >2</button>
                <button type="button" className="teacher__button_box_num" >3</button>
                <button type="button" className="teacher__button_box_num" >4</button>
                <button type="button" className="teacher__button_box_arrow" ><img src={right_arrow} alt="left arrow"/></button>
              </div>
          </div>
      </div>
  );
}

export default Teacher;
