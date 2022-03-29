import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import logoL from "../../assets/logoLarge.png";
import map from "../../assets/map.png";
import cancel from "../../assets/cancel.png";
import drag_drop from "../../assets/drag_drop.png";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Loader from "../../Components/Loader/Loader";

const AboutUs = (props) => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState({});
  const [details, setDetails] = useState({
    description: "",
    phone: "",
    email: "",
    address: "",
  });
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(0);

  const handleClick1 = () => {
    setValue(1);
  };
  const handleClick2 = () => {
    setValue(0);
  };

  useEffect(() => {
    fetch("https://mmhs-mumbai.herokuapp.com/about")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const onSubmit = async () => {
    setLoading(1);
    const storageRef = ref(storage, `aboutUs/map`);
    await uploadBytes(storageRef, image).then((snapshot) => {
      console.log("uploaded");
    });
    const downloadUrl = await getDownloadURL(ref(storage, `aboutUs/map`));
    await fetch("https://mmhs-mumbai.herokuapp.com/about", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: details.description,
        phone: details.phone,
        address: details.address,
        email: details.email,
        picture: downloadUrl,
      }),
    });
    setLoading(0);
    window.location.reload();
  };

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  console.log(details);

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="about_us">
      <div
        className={
          value === 0
            ? "about_us__form_div_not_open"
            : "about_us__form_div_open"
        }
      >
        <div className="about_us__form">
          <div className="about_us__from_img" onClick={handleClick2}>
            <img src={cancel} alt="cancel" />
          </div>
          <h1>Add New About Us</h1>
          <div className="about_us__form_input">
            <h5>Add Logo</h5>
            <input type="file" name="" id="" onChange={handleUpload} />
            {/* <div
              className="about_us__form_drop_zone"
              style={{
                background: `url(${drag_drop})`,
                backgroundSize: "contain",
                backgroundSize: "270px 110px",
              }}
            ></div> */}
          </div>
          <div className="about_us__form_input">
            <h5>Add About Us</h5>
            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              className="about_us__form_text_input"
              required
            />
          </div>
          <div className="about_us__form_input">
            <h5>Add Phone</h5>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              className="about_us__form_input_small"
              required
            />
          </div>
          <div className="about_us__form_input">
            <h5>Add Email</h5>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              className="about_us__form_input_small"
              required
            />
          </div>
          <div className="about_us__form_input">
            <h5>Add Address</h5>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              className="about_us__form_input_small"
              required
            />
          </div>
          <div className="about_us__form_button" onClick={onSubmit}>
            {loading ? (
              <Loader small={true} />
            ) : (
              <p style={{ color: "#fff" }}>Submit</p>
            )}
          </div>
        </div>
      </div>
      <div className="about_us__top">
        <div className="about_us__top_div">School Logo</div>
        <button className="about_us__top_button" onClick={handleClick1}>
          Add About Us
        </button>
      </div>
      <div className="about_us__middle">
        <div>
          <img className="about_us__middle_logo" src={logoL} alt="logo" />
        </div>
        <div className="about_us__middle_div">About School</div>
        <div className="about_us__middle_p_map">
          <p>{data ? data.description : "loading..."}</p>
          <img src={map} alt="map" />
        </div>
      </div>
      <div className="about_us__bottom">
        <div className="about_us__bottom_contact">Contact Info</div>
        <div className="about_us__bottom_contact_div">
          <p>Phone : {data ? data.phone : "loading..."}</p>
          <p>E-mail : {data ? data.email : "loading..."}</p>
          <p>Address : {data ? data.address : "loading..."}</p>
        </div>
        <div className="about_us__bottom_extra"></div>
      </div>
    </div>
  );
};

export default AboutUs;
