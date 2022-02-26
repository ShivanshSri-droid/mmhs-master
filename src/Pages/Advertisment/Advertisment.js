import React from 'react';
import "./Advertisment.css";
import calendar from "../../assets/calendar.png";
import left_arrow from "../../assets/ic_chevron_left.png";
import right_arrow  from "../../assets/ic_chevron_right.png";
import advertiser_banner  from "../../assets/advertiser_banner.png";

const tempData = [
    {
        date: "12 / 12 / 2021",
        title: "Covid advertisment for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid advertisment for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid advertisment for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid advertisment for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid advertisment for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid advertisment for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid advertisment for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid advertisment for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid advertisment for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid advertisment for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
    {
        date: "12 / 12 / 2021",
        title: "Covid advertisment for school",
        notice: "Duis aute irure dolor in reprehenderit ...",
        attachment: "reprehenderit voluptate.jpg",
    },
]


const Advertisment = () => {
  return (
      <div className="advertisment">
          {/* <div className="advertisment__top">
                <div className="advertisment__top_button_left_most">
                    <button type="button" className="advertisment__top_button_advertisment advertisment__top_button_go">Add Advertisment</button>
                </div>
          </div>
          <div className="advertisment__middle"></div>
          <div className="advertisment__bottom"></div> */}
          <div className="advertisment__top">
                <div className="advertisment__top_button_left_most">
                    <button type="button" className="advertisment__top_button_advertisment advertisment__top_button_go">Add advertisment</button>
                </div>
          </div>
          <div className="advertisment__middle">
            <table >
                <tr className="advertisment__middle_tr" >
                    <th className="advertisment__middle_th">From Date - To Date</th>
                    <th className="advertisment__middle_th">Advertiser Name</th>
                    <th className="advertisment__middle_th">Advertiser Banner</th>
                    <th className="advertisment__middle_th">Advertiser Description</th>
                    <th className="advertisment__middle_th"></th>
                </tr>
                {tempData.map((data)=>{
                    return(
                        <tr className="advertisment__middle_tr" >
                            <td className="advertisment__middle_td">{data.date}</td>
                            <td className="advertisment__middle_td">{data.title}</td>
                            <td className="advertisment__middle_td banner"><img src={advertiser_banner}></img></td>
                            <td className="advertisment__middle_td">{data.notice}</td>
                            <td className="advertisment__middle_td"><button type="button" className="advertisment__middle_td_edit">Edit</button><button type="button" className="advertisment__middle_td_delete">Delete</button></td>
                        </tr>
                    );
                })}
                
            </table>
          </div>
          <div className="advertisment__bottom">
          <p>Showing 10 from 46 data</p>
              <div className="advertisment__bottom_box">
                <button type="button" className="advertisment__button_box_arrow"><img src={left_arrow} alt="left arrow"/></button>
                <button type="button" className="advertisment__bottom_box_selected_num" >1</button>
                <button type="button" className="advertisment__button_box_num" >2</button>
                <button type="button" className="advertisment__button_box_num" >3</button>
                <button type="button" className="advertisment__button_box_num" >4</button>
                <button type="button" className="advertisment__button_box_arrow" ><img src={right_arrow} alt="left arrow"/></button>
              </div>
          </div>
      </div>
  );
}

export default Advertisment;
