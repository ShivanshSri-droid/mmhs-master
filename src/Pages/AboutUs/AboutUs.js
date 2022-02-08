import React from 'react';
import "./AboutUs.css";
import logoL from "../../assets/logoLarge.png";
import map from "../../assets/map.png";

const AboutUs = (props) => {
  return (
      <div className="about_us">
          <div className="about_us__top">
            <div className="about_us__top_div">School Logo</div>
            <button className="about_us__top_button">Add About Us</button>
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
