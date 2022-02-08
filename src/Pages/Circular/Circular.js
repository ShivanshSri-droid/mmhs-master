import React from 'react';
import "./Circular.css";
import calendar from "../../assets/calendar.png";
import left_arrow from "../../assets/ic_chevron_left.png";
import right_arrow  from "../../assets/ic_chevron_right.png";

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
]

const Circular = () => {
  return(
      <div className="circular">
          <div className="circular__top">
                <div className="circular__top_button">
                    <button type="button"  className="circular__top_button_date">
                        <img className="circular__top_button_date_img" src={calendar} alt="upload" />
                        Date
                    </button>
                </div>
                <div className="circular__top_button">
                    <button type="button"  className="circular__top_button_go">Go</button>
                </div>
                <div className="circular__top_button_left_most">
                    <button type="button" className="circular__top_button_circular circular__top_button_go">Add Circular</button>
                </div>
          </div>
          <div className="circular__middle">
            <table >
                <tr className="circular__middle_tr" >
                    <th className="circular__middle_th">Date</th>
                    <th className="circular__middle_th">Title</th>
                    <th className="circular__middle_th">Notice</th>
                    <th className="circular__middle_th">Attachment</th>
                    <th className="circular__middle_th"></th>
                </tr>
                {tempData.map((data)=>{
                    return(
                        <tr className="circular__middle_tr" >
                            <td className="circular__middle_td">{data.date}</td>
                            <td className="circular__middle_td">{data.title}</td>
                            <td className="circular__middle_td">{data.notice}</td>
                            <td className="circular__middle_td">{data.attachment}</td>
                            <td className="circular__middle_td"><button type="button" className="circular__middle_td_edit">Edit</button><button type="button" className="circular__middle_td_delete">Delete</button></td>
                        </tr>
                    );
                })}
                
            </table>
          </div>
          <div className="circular__bottom">
          <p>Showing 10 from 46 data</p>
              <div className="circular__bottom_box">
                <button type="button" className="circular__button_box_arrow"><img src={left_arrow} alt="left arrow"/></button>
                <button type="button" className="circular__bottom_box_selected_num" >1</button>
                <button type="button" className="circular__button_box_num" >2</button>
                <button type="button" className="circular__button_box_num" >3</button>
                <button type="button" className="circular__button_box_num" >4</button>
                <button type="button" className="circular__button_box_arrow" ><img src={right_arrow} alt="left arrow"/></button>
              </div>
          </div>
      </div>
  );
}

export default Circular;
