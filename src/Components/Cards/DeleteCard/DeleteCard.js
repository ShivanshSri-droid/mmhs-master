import React from "react";
import "./deleteCard.css";

const DeleteCard = ({ del, close }) => {
  return (
    <div className="delete-card">
      <p>Are you sure you want to delete ?</p>
      <p>Lorem Ipsum is simply dummy text of the printing and type setting </p>
      <div className="action-box">
        <button onClick={del}>Delete</button>
        <button onClick={close}>No</button>
      </div>
    </div>
  );
};

export default DeleteCard;
