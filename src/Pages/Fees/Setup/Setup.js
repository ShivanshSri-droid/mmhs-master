import React from 'react';
import "./Setup.css";
import left_arrow from "../../../assets/ic_chevron_left.png";
import right_arrow  from "../../../assets/ic_chevron_right.png";
import advertiser_banner  from "../../../assets/advertiser_banner.png";

const tempData = [
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
    {
        section: "Primary",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        total: "₹ 26,600",
        late: "₹ 26,600",
        date: "12 / 12 /2021",
    },
]


const Setup = () => {
  return (
      <div className="setup">
          {/* <div className="setup__top">
                <div className="setup__top_button_left_most">
                    <button type="button" className="setup__top_button_setup setup__top_button_go">Add setup</button>
                </div>
          </div>
          <div className="setup__middle"></div>
          <div className="setup__bottom"></div> */}
          <div className="setup__top">
                <div className="setup__top_button_left_most">
                    <button type="button" className="setup__top_button_setup setup__top_button_go">Add Fees setup</button>
                </div>
          </div>
          <div className="setup__middle">
            <table >
                <tr className="setup__middle_tr" >
                    <th className="setup__middle_th">Section</th>
                    <th className="setup__middle_th">Tution Fee</th>
                    <th className="setup__middle_th">Computer Fee</th>
                    <th className="setup__middle_th">Miscellaneous Fee</th>
                    <th className="setup__middle_th">Total Fee</th>
                    <th className="setup__middle_th">Late Fee</th>
                    <th className="setup__middle_th">Late Fees Date</th>
                    <th className="setup__middle_th"></th>
                </tr>
                {tempData.map((data)=>{
                    return(
                        <tr className="setup__middle_tr scroll" >
                            <td className="setup__middle_td">{data.section}</td>
                            <td className="setup__middle_td">{data.tution}</td>
                            <td className="setup__middle_td banner">{data.computer}</td>
                            <td className="setup__middle_td">{data.miscellaneous}</td>
                            <td className="setup__middle_td">{data.total}</td>
                            <td className="setup__middle_td">{data.late}</td>
                            <td className="setup__middle_td">{data.date}</td>
                            <td className="setup__middle_td"><button type="button" className="setup__middle_td_edit">Edit</button><button type="button" className="setup__middle_td_delete">Delete</button></td>
                        </tr>
                    );
                })}
                
            </table>
          </div>
          <div className="setup__bottom">
          <p>Showing 10 from 46 data</p>
              <div className="setup__bottom_box">
                <button type="button" className="setup__button_box_arrow"><img src={left_arrow} alt="left arrow"/></button>
                <button type="button" className="setup__bottom_box_selected_num" >1</button>
                <button type="button" className="setup__button_box_num" >2</button>
                <button type="button" className="setup__button_box_num" >3</button>
                <button type="button" className="setup__button_box_num" >4</button>
                <button type="button" className="setup__button_box_arrow" ><img src={right_arrow} alt="left arrow"/></button>
              </div>
          </div>
      </div>
  );
}

export default Setup;
