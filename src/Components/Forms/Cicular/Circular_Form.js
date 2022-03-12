import React, {useState} from 'react';
import "./Circular_Form.css";
import drag_drop from "../../../assets/drag_drop.png";
import calendar from "../../../assets/calendar.png";
import cancel from "../../../assets/cancel.png";


const Circular_Form = (props) => {

const handleClick2 = () => {
  props.setDisp();
}

  return (
    <div className={"circular__form_div_open"}>
            <div className="circular__form">
              <div className="circular__from_img" onClick={handleClick2}>
                <img src={cancel} alt="cancel"/>
              </div>
              <h1>Add New Circular</h1>
              <div className="circular__form_p">
                <p>quis nostrud exercitation ullamco</p>
              </div>
              <div className="circular__form_input">
                <h5>Add New Circular</h5>
                <input type="text" value={props.circular} className="circular__form_input_small"/>
              </div>
              <div className="circular__form_input ">
                <h5>Add Circuar Date</h5>
                <input type="text" value={props.date} className=" circular__form_input_small input_date"/>
                <img src={calendar} alt="calendar" />
              </div>
              <div className="circular__form_input">
                <h5>Add Logo</h5>
                <div 
                  className="circular__form_drop_zone"
                  style={{
                    background: `url(${drag_drop})`,
                    backgroundSize: 'contain',
                    backgroundSize : '270px 110px',
                    }}
                >
                </div>
              </div>
              <div className="circular__form_input big">
                <h5>Add Circular Notice</h5>
                <textarea type="textarea" value={props.notice} className="circular__form_input_small"/>
              </div>
              <div className="circular__form_input_checkbox">
                <div className='form-group'>
                    <input type="checkbox" name='all'></input>
                    <label for='all'>All</label>
                </div>
                <div className='form-group'>
                    <input type="checkbox" name='all'></input>
                    <label for='all'>Nursery</label>
                </div>
                <div className='form-group'>
                    <input type="checkbox" name='all'></input>
                    <label for='all'>Pre Primary</label>
                </div>
                <div className='form-group'>
                    <input type="checkbox" name='all'></input>
                    <label for='all'>Primary</label>
                </div>
                <div className='form-group'>
                    <input type="checkbox" name='all'></input>
                    <label for='all'>Secondary</label>
                </div>
              </div>
                
              <div className="circular__form_button">
                <a href="#">Add Circular</a>
              </div>
            </div>
          </div>
  )
}

export default Circular_Form;