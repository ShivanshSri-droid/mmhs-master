import React, {useState} from 'react';
import "./AboutUs.css";
import logoL from "../../assets/logoLarge.png";
import map from "../../assets/map.png";
import cancel from "../../assets/cancel.png";
import drag_drop from "../../assets/drag_drop.png"; 



const AboutUs = (props) => {
  const [value, setValue] = useState(0);
  
  const handleClick1 = () => {
    setValue(1);
  }
  const handleClick2 = () => {
    setValue(0);
  }
  
  return (
      <div className="about_us">
          <div className={value===0?"about_us__form_div_not_open":"about_us__form_div_open"}>
            <div className="about_us__form">
              <div className="about_us__from_img" onClick={handleClick2}>
                <img src={cancel} alt="cancel"/>
              </div>
              <h1>Add New About Us</h1>
              <div className="about_us__form_p">
                <p>quis nostrud exercitation ullamco</p>
              </div>
              <div className="about_us__form_input">
                <h5>Add Logo</h5>
                <div 
                  className="about_us__form_drop_zone"
                  style={{
                    background: `url(${drag_drop})`,
                    backgroundSize: 'contain',
                    backgroundSize : '270px 110px',
                    }}
                >
                </div>
              </div>
              <div className="about_us__form_input">
                <h5>Add About Us</h5>
                <input type="text" className="about_us__form_text_input"/>
              </div>
              <div className="about_us__form_input">
                <h5>Add Longitude</h5>
                <input type="text" className="about_us__form_input_small"/>
              </div>
              <div className="about_us__form_input">
                <h5>Add Latitude</h5>
                <input type="text" className="about_us__form_input_small"/>
              </div>
              <div className="about_us__form_input">
                <h5>Add Phone</h5>
                <input type="text" className="about_us__form_input_small"/>
              </div><div className="about_us__form_input">
                <h5>Add Email</h5>
                <input type="text" className="about_us__form_input_small"/>
              </div>
              <div className="about_us__form_input">
                <h5>Add Address</h5>
                <input type="text" className="about_us__form_input_small"/>
              </div>
              <div className="about_us__form_button">
                <a href="#">Submit</a>
              </div>
            </div>
          </div>
          <div className="about_us__top">
            <div className="about_us__top_div">School Logo</div>
            <button className="about_us__top_button" onClick={handleClick1}>Add About Us</button>
          </div>
          <div className="about_us__middle">
            <div ><img className="about_us__middle_logo" src={logoL} alt="logo"/></div>
            <div className="about_us__middle_div">About School</div>
            <div className="about_us__middle_p_map">
                <p>Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src={map} alt="map" />
            </div>
          </div>
          <div className="about_us__bottom">
            <div className="about_us__bottom_contact">Contact Info</div>
            <div className="about_us__bottom_contact_div">
                <p>Phone :  022 2878 2878</p>
                <p>E-mail : testdomain@mmhs.com</p>
                <p>Address : 14 Harilabh Apts Ramchandra Lane, <br/>
                Mumbai,Mumbai,400064,India</p>
            </div>
            <div className="about_us__bottom_extra"></div>
          </div>

      </div>
  );
}

export default AboutUs;
