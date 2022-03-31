import React, { useState, useEffect } from "react";
import "./Advertisment__Form.css";
import drag_drop from "../../../assets/drag_drop.png";
import calendar from "../../../assets/calendar.png";
import cancel from "../../../assets/cancel.png";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Loader from "../../Loader/Loader";

const Advertisment_Form = (props) => {
  const [details, setDetails] = useState({
    name: "",
    from_dt: "",
    to_dt: "",
    description: "",
  });
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(0);

  const isEdit = props.isEdit;
  const data = props.data;

  useEffect(() => {
    if (isEdit) {
      setDetails({
        ...details,
        name: data.name,
        from: data.from_dt,
        to: data.to_dt,
        description: data.description,
      });
    }
  }, [isEdit]);

  const handleClick2 = () => {
    props.setDisp();
    props.setEdit();
  };

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(1);
    if (!isEdit) {
      const storageRef = ref(storage, `advertisements/${image.name}`);
      await uploadBytes(storageRef, image).then((snapshot) => {
        console.log("uploaded");
      });
      const downloadUrl = await getDownloadURL(
        ref(storage, `advertisements/${image.name}`)
      );
      console.log(downloadUrl);
      await fetch("https://mmhs-mumbai.herokuapp.com/advertisements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: details.name,
          from: details.from_dt,
          to: details.to_dt,
          banner: downloadUrl,
          description: details.description,
        }),
      });
    } else {
      await fetch(
        `https://mmhs-mumbai.herokuapp.com/advertisements/${data.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: details.name,
            from: details.from_dt,
            to: details.to_dt,
            description: details.description,
          }),
        }
      );
    }
    setLoading(0);
    window.location.reload();
  };

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  console.log(image);

  return (
    <div className={"advertisment__form_div_open"}>
      <div className="advertisment__form">
        <div className="advertisment__from_img" onClick={handleClick2}>
          <img src={cancel} alt="cancel" />
        </div>
        <h1>Add New advertisment</h1>
        <div className="advertisment__form_p">
          {/* <p>quis nostrud exercitation ullamco</p> */}
        </div>
        <div className="advertisment__form_input">
          <h5>Add Advertisment Title</h5>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            defaultValue={isEdit ? data.name : null}
            className="advertisment__form_input_small"
          />
        </div>
        <div className="advertisment__form_input ">
          <h5>Add From Date</h5>
          <input
            type="date"
            className="date"
            name="from_dt"
            onChange={handleChange}
          />
        </div>
        <div className="advertisment__form_input ">
          <h5>Add To Date</h5>
          <input
            type="date"
            className="date"
            name="to_dt"
            onChange={handleChange}
          />
        </div>
        <div className="advertisment__form_input big">
          <h5>Advertiser Description</h5>

          <input
            type="text"
            name="description"
            onChange={handleChange}
            defaultValue={isEdit ? data.description : null}
            className="advertisment__form_input_small"
          />
        </div>
        <div className="advertisment__form_input">
          <h5>Add Banner</h5>
          <input
            type="file"
            name="banner"
            id=""
            style={{ marginTop: "20px", marginBottom: "20px" }}
            onChange={handleUpload}
          />
          {/* <div
            className="advertisment__form_drop_zone"
            style={{
              background: `url(${drag_drop})`,
              backgroundSize: "contain",
              backgroundSize: "270px 110px",
            }}
          ></div> */}
        </div>
        <div className="advertisment__form_button" onClick={handleSubmit}>
          {loading ? (
            <Loader small={true} />
          ) : (
            <p style={{ color: "#fff" }}>Add advertisment</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Advertisment_Form;
