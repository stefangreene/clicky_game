import React from 'react';
import "./cards.css";

const Card = props => {
    return (
        <div className="card" key = {props.id}
        onClick ={() => props.handleClick(props.id, props.clicked)}>
          <div className="img-container">
            <img alt={props.name} src={props.image} />
            {props.name}
          </div>
        </div>
      );
}
export default Card;


 
