import React from "react";
import "./body.css";

function Body(props) {
  return <div className="container-fluid">{props.children}</div>;
}

export default Body;
