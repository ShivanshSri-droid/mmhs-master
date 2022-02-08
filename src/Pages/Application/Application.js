import React from 'react';
import "./Application.css";
import calendar from "../../assets/calendar.png";
import email  from "../../assets/email.png";
import left_arrow from "../../assets/ic_chevron_left.png";
import right_arrow  from "../../assets/ic_chevron_right.png";

const tempData = [
    {
        gr_number: "#001234",
        name: "Krishna Saxena",
        class: "IV",
        section: "B",
        grade: "Primary",
        application_type: "School NOC",
        request_date: "8/02/2022",
    },
    {
        gr_number: "#001235",
        name: "Krishna Saxena",
        class: "IV",
        section: "B",
        grade: "Primary",
        application_type: "School NOC",
        request_date: "8/02/2022",
    },
    {
        gr_number: "#001236",
        name: "Krishna Saxena",
        class: "IV",
        section: "B",
        grade: "Primary",
        application_type: "School NOC",
        request_date: "8/02/2022",
    },
    {
        gr_number: "#001237",
        name: "Krishna Saxena",
        class: "IV",
        section: "B",
        grade: "Primary",
        application_type: "School NOC",
        request_date: "8/02/2022",
    },
    {
        gr_number: "#001238",
        name: "Krishna Saxena",
        class: "IV",
        section: "B",
        grade: "Primary",
        application_type: "School NOC",
        request_date: "8/02/2022",
    },
    {
        gr_number: "#001239",
        name: "Krishna Saxena",
        class: "IV",
        section: "B",
        grade: "Primary",
        application_type: "School NOC",
        request_date: "8/02/2022",
    },
    {
        gr_number: "#001240",
        name: "Krishna Saxena",
        class: "IV",
        section: "B",
        grade: "Primary",
        application_type: "School NOC",
        request_date: "8/02/2022",
    },
]

const Application = (props) => {
  return (
      <div className="application">
          <div className="application__top">
              <div className="application__top_button">
                <button type="button"  className="application__top_button_date">
                    <img className="application__top_button_date_img" src={calendar} alt="upload" />   
                    Date
                </button>
              </div>
              <div className="application__top_button">
                <button type="button"  className="application__top_button_go">
                    Go
                </button>
              </div>
          </div>
          <div className="application__middle">
          <table >
                <tr className="application__middle_tr" >
                    <th className="application__middle_th">GR Number</th>
                    <th className="application__middle_th">Name</th>
                    <th className="application__middle_th">Class</th>
                    <th className="application__middle_th">Section</th>
                    <th className="application__middle_th">Grade</th>
                    <th className="application__middle_th">Application Type</th>
                    <th className="application__middle_th">Request Date</th>
                    <th className="application__middle_th">Contact</th>
                    <th className="application__middle_th">Status</th>
                </tr>
                {tempData.map((data)=>{
                    return(
                        <tr className="application__middle_tr" >
                            <td className="application__middle_td">{data.gr_number}</td>
                            <td className="application__middle_td">{data.name}</td>
                            <td className="application__middle_td">{data.class}</td>
                            <td className="application__middle_td">{data.section}</td>
                            <td className="application__middle_td">{data.grade}</td>
                            <td className="application__middle_td">{data.application_type}</td>
                            <td className="application__middle_td">{data.request_date}</td>
                            <td className="application__middle_td"><a href="#"><img src={email} /></a></td>
                            <td className="application__middle_td"><div ><button type="button" className={`application__middle_td_status  ${data.gr_number.substring(3)%2===0 ? "pending" : "proceed"}`}>{`${data.gr_number.substring(3)%2===0 ? "Pending" : "Proceed"}`}</button></div></td>
                        </tr>
                    );
                })}
                
            </table>
          </div>
          <div className="application__bottom">
              <p>Showing 10 from 46 data</p>
              <div className="application__bottom_box">
                <button type="button" className="application__button_box_arrow"><img src={left_arrow} alt="left arrow"/></button>
                <button type="button" className="application__bottom_box_selected_num" >1</button>
                <button type="button" className="application__button_box_num" >2</button>
                <button type="button" className="application__button_box_num" >3</button>
                <button type="button" className="application__button_box_num" >4</button>
                <button type="button" className="application__button_box_arrow" ><img src={right_arrow} alt="left arrow"/></button>
              </div>
          </div>

      </div>
  );
}

export default Application;
