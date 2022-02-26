import React from 'react';
import "./Report.css";
import left_arrow from "../../../assets/ic_chevron_left.png";
import right_arrow  from "../../../assets/ic_chevron_right.png";
import calendar from "../../../assets/calendar.png";
import classes from "../../../assets/classes.png";
import payment from "../../../assets/payment.png";
import download from "../../../assets/download.png";

const tempData = [
    {
        gr_number: "#001234",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001235",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001236",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001237",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001238",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001239",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001240",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001241",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001242",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001243",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001244",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001245",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001246",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001247",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001248",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001249",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
    {
        gr_number: "#001250",
        name: "Fanny Siregar",
        class: "IV",
        section: "Primary",
        payment_date: "12 / 12 /2021",
        tution: "₹ 16,600",
        computer: "₹ 32,600",
        miscellaneous: "₹ 89,600",
        late: "₹ 26,600",
        due: "₹ 32,600",
        paid_fee: "₹ 26,600",
    },
]

const Report = () => {
  return (
      <div className="report">
          <div className="report__top">
                <div className="report__top_left"> 
                    <div className="report__top_button">
                        <button type="button"  className="report__top_button_date">
                            <img className="report__top_button_date_img" src={classes} alt="upload" />
                            Class
                        </button>
                    </div>
                    <div className="report__top_button">
                        <button type="button"  className="report__top_button_date">
                            <img className="report__top_button_date_img" src={calendar} alt="upload" />
                            Date
                        </button>
                    </div>
                    <div className="report__top_button">
                        <button type="button"  className="report__top_button_button">
                            <img className="report__top_button_img" src={payment} alt="upload" />   
                            Payment Status
                        </button>
                    </div>
                    <div className="report__top_button">
                        <button type="button"  className="report__top_button_go">Go</button>
                    </div>
                </div>
                <div className="report__top_right">
                    <div className="report__top_button">
                        <button type="button"  className="report__top_button_button">
                            <img className="report__top_button_img" src={download} alt="upload" />   
                            Download .CSV
                        </button>
                    </div>
                </div>
          </div>
          <div className="report__middle">
            <table >
                <tr className="report__middle_tr" >
                    <th className="report__middle_th">GR Number</th>
                    <th className="report__middle_th">Name</th>
                    <th className="report__middle_th">Section</th>
                    <th className="report__middle_th">Payment Date</th>
                    <th className="report__middle_th">Tution Fee</th>
                    <th className="report__middle_th">Computer Fee</th>
                    <th className="report__middle_th misc">Miscellaneous Fee</th>
                    <th className="report__middle_th">Late Fee</th>
                    <th className="report__middle_th">Due Amount</th>
                    <th className="report__middle_th">Paid Fee</th>
                    <th className="report__middle_th">Payment Status</th>
                </tr>
                {tempData.map((data)=>{
                    return(
                        <tr className="report__middle_tr scroll" >
                            <td className="report__middle_td">{data.gr_number}</td>
                            <td className="report__middle_td">{data.name}</td>
                            <td className="report__middle_td">{data.class}</td>
                            <td className="report__middle_td">{data.section}</td>
                            <td className="report__middle_td">{data.payment_date}</td>
                            <td className="report__middle_td">{data.tution}</td>
                            <td className="report__middle_td banner">{data.computer}</td>
                            <td className="report__middle_td">{data.miscellaneous}</td>
                            <td className="report__middle_td">{data.late}</td>
                            <td className="report__middle_td">{data.due}</td>
                            <td className="report__middle_td"><div ><button type="button" className={`report__middle_td_status  ${data.gr_number.substring(3)%2===0 ? "paid" : "unpaid"}`}>{`${data.gr_number.substring(3)%2===0 ? "Paid" : "Unpaid"}`}</button></div></td>
                        </tr>
                    );
                })}
                
            </table>
          </div>
          <div className="report__bottom">
          <p>Showing 10 from 46 data</p>
              <div className="report__bottom_box">
                <button type="button" className="report__button_box_arrow"><img src={left_arrow} alt="left arrow"/></button>
                <button type="button" className="report__bottom_box_selected_num" >1</button>
                <button type="button" className="report__button_box_num" >2</button>
                <button type="button" className="report__button_box_num" >3</button>
                <button type="button" className="report__button_box_num" >4</button>
                <button type="button" className="report__button_box_arrow" ><img src={right_arrow} alt="left arrow"/></button>
              </div>
          </div>
      </div>
  );
}

export default Report;
