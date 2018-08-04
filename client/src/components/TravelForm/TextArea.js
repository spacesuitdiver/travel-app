import React from "react";
import "./TextArea.js";

export const TextArea = props => (
  <div className="form-group">
    <textarea className="form-control" rows="20" {...props} />
  </div>
);

export default TextArea;