import React from "react";
import "./activateCard.css";

const ActivateCard = ({ close, action }) => {
  return (
    <div className="delete-card">
      <p>Are you sure you want to perform this action ?</p>
      <div className="action-box">
        <button onClick={action}>Proceed</button>
        <button onClick={close}>No</button>
      </div>
    </div>
  );
};

export default ActivateCard;
