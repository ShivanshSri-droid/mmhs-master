import React from "react";
import "./activateCard.css";

const DeleteCard = ({ status, close, action }) => {
  return (
    <div className="delete-card">
      <p>Are you sure you want to {status} ?</p>
      <p>Lorem Ipsum is simply dummy text of the printing and type setting </p>
      <div className="action-box">
        <button onClick={action}>{status}</button>
        <button onClick={close}>No</button>
      </div>
    </div>
  );
};

export default DeleteCard;
