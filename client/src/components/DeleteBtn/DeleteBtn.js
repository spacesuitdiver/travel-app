import React from "react";
import "./DeleteBtn.css";

const DeleteBtn = props => (
  <div className="delete-btn" {...props}>
    DELETE <span role="img" aria-labelledby="trashcan">🗑</span> 

  </div>
);

export default DeleteBtn;
