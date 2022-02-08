import React from 'react';
import "./GraphCard.css";
import green from "../../../assets/green.png";
import yellow from "../../../assets/yellow.png";


const GraphCard = (props) => {
    return(
        <div className="graph_card">
            <div className="graph_card__top">
                <p>School Finance</p>
                <div className="graph_card__radio_buttons">
                    <input type="radio" name="time_period" value="Year"/>
                    <label for="Year">Year</label>
                    <input type="radio" name="time_period" value="Quarterly"/>
                    <label for="Quarterly">Quarterly</label>
                    <input type="radio" name="time_period" value="Monthly"/>
                    <label for="Monthly">Monthly</label>
                    <input type="radio" name="time_period" value="Weekly"/>
                    <label for="Weekly">Weekly</label>
                </div>
            </div>
            <div className="graph_card__middle">
                <div className="graph_card__middle_container">
                    <img className="graph_card__middle_arrow_img" src={green} alt="green arrow"/>
                    <div className="graph_card__middle_content">
                        <p>Fees Paid</p>
                        <h3>{props.paid}</h3>
                    </div>
                </div>
                <div className="graph_card__middle_container">
                    <img className="graph_card__middle_arrow_img" src={yellow} alt="green arrow"/>
                    <div className="graph_card__middle_content">
                        <p>Fees Due</p>
                        <h3>{props.due}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GraphCard;
