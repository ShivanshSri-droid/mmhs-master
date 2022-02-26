import React from 'react';
import "./Admission.css";
import left_arrow from "../../assets/ic_chevron_left.png";
import right_arrow  from "../../assets/ic_chevron_right.png";
import advertiser_banner  from "../../assets/advertiser_banner.png";

const tempData = [
    {
        id: "#001234",
        name: "Fanny Siregar",
        pname: "Leo Franci",
        phone: "987456123",
    },
    {
        id: "#001234",
        name: "Fanny Siregar",
        pname: "Leo Franci",
        phone: "987456123",
    },
    {
        id: "#001234",
        name: "Fanny Siregar",
        pname: "Leo Franci",
        phone: "987456123",
    },
    {
        id: "#001234",
        name: "Fanny Siregar",
        pname: "Leo Franci",
        phone: "987456123",
    },
    {
        id: "#001234",
        name: "Fanny Siregar",
        pname: "Leo Franci",
        phone: "987456123",
    },
    {
        id: "#001234",
        name: "Fanny Siregar",
        pname: "Leo Franci",
        phone: "987456123",
    },
    {
        id: "#001234",
        name: "Fanny Siregar",
        pname: "Leo Franci",
        phone: "987456123",
    },
    {
        id: "#001234",
        name: "Fanny Siregar",
        pname: "Leo Franci",
        phone: "987456123",
    },
    {
        id: "#001234",
        name: "Fanny Siregar",
        pname: "Leo Franci",
        phone: "987456123",
    },
    {
        id: "#001234",
        name: "Fanny Siregar",
        pname: "Leo Franci",
        phone: "987456123",
    },
    {
        id: "#001234",
        name: "Fanny Siregar",
        pname: "Leo Franci",
        phone: "987456123",
    },
]


const Admission = () => {
  return (
      <div className="admission">
          <div className="admission__middle">
            <table >
                <tr className="admission__middle_tr" >
                    <th className="admission__middle_th">GR Number</th>
                    <th className="admission__middle_th">Student Name</th>
                    <th className="admission__middle_th">Parent Name</th>
                    <th className="admission__middle_th">Parent Phone Number</th>
                    <th className="admission__middle_th"></th>
                    <th className="admission__middle_th"></th>
                </tr>
                {tempData.map((data)=>{
                    return(
                        <tr className="admission__middle_tr" >
                            <td className="admission__middle_td"><a href="#">Enter GR Number</a></td>
                            <td className="admission__middle_td">{data.name}</td>
                            <td className="admission__middle_td banner">{data.pname}</td>
                            <td className="admission__middle_td">{data.phone}</td>
                            <td className="admission__middle_td"><a href="#">View Application</a></td>
                            <td className="admission__middle_td"><div className="admission__middle_td_buttons" ><button type="button" className="admission__middle_td_button proceed">Accept</button><button type="button" className="admission__middle_td_button pending">Reject</button></div></td>
                        </tr>
                    );
                })}
                
            </table>
          </div>
          <div className="admission__bottom">
          <p>Showing 10 from 46 data</p>
              <div className="admission__bottom_box">
                <button type="button" className="admission__button_box_arrow"><img src={left_arrow} alt="left arrow"/></button>
                <button type="button" className="admission__bottom_box_selected_num" >1</button>
                <button type="button" className="admission__button_box_num" >2</button>
                <button type="button" className="admission__button_box_num" >3</button>
                <button type="button" className="admission__button_box_num" >4</button>
                <button type="button" className="admission__button_box_arrow" ><img src={right_arrow} alt="left arrow"/></button>
              </div>
          </div>
      </div>
  );
}

export default Admission;
