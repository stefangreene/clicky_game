import React from "react";
import "./body.css";

function Body(props) {
  return <div className="card-container">{props.children}</div>;
}

export default Body;
