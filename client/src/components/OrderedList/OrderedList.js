import React from "react";
import "./OrderedList.css";

export const OrderedList = props => (
  <ol className="list-group">{props.children}</ol>
);
