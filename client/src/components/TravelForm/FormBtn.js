import React from "react";
import "./FormBtn.css";

export const FormBtn  = ({ type = "default", className, children, onClick }) =>  (
  <button
  onClick={onClick}
  className={["btn btn-lg", `btn-${type}`, className].join(" ")}
>
  {children}
</button>
);

export default FormBtn;